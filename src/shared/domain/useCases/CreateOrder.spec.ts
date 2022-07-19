import faker from 'faker';

import { ICreateOrderDTO } from '@/shared/domain/dtos/CreateOrderDTO';
import { IOrder } from '@/shared/domain/entities/Order';
import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';
import { FakeOrdersRepository } from '@/shared/domain/repositories/fakes/FakeOrdersRepository';
import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';

import CreateOrder from './CreateOrder';

const makeUseCase = () => {
    const ordersRepository = new FakeOrdersRepository();
    const productsRepository = new FakeProductsRepository();
    const customersRepository = new FakeCustomersRepository();
    const createOrderUseCase = new CreateOrder(
        ordersRepository,
        productsRepository,
        customersRepository,
    );

    return {
        ordersRepository,
        productsRepository,
        customersRepository,
        createOrderUseCase,
    };
};

describe('CreateOrder', () => {
    const defaultDate = new Date('2022-07-18T13:00:00Z');
    const saturdayDate = new Date('2022-07-16T13:00:00Z');
    const sundayDate = new Date('2022-07-17T13:00:00Z');
    const nonComercialDateBeforeOpen = new Date('2022-07-19T07:59:59Z');
    const nonComercialDateAfterClose = new Date('2022-07-19T18:00:00Z');

    beforeAll(() => {
        jest.useFakeTimers();
    });

    beforeEach(() => {
        jest.setSystemTime(defaultDate);
    });

    it('should create a order with one product and a discount at 1 installment', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };
        const result = await createOrderUseCase.execute(order);

        expect(result).toEqual<IOrder>({
            id: expect.any(String),
            createdAt: expect.any(Date),
            customer,
            discount: 0.1,
            totalPrice: 10,
            discountedPrice: 9,
            installments: 1,
            products: [
                {
                    product,
                    quantity: 1,
                },
            ],
        });
    });

    it('should create the order with both products, correct total price and no discount if there are many installments', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const [firstProduct, secondProduct] = await Promise.all(
            Array.from({ length: 2 }, (_, index) =>
                productsRepository.create({
                    description: faker.lorem.sentence(),
                    name: faker.commerce.productName(),
                    price: 10 * (index + 1),
                    slug: faker.lorem.slug(),
                }),
            ),
        );

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 5,
            products: [
                {
                    productId: firstProduct.id,
                    quantity: 1,
                },
                {
                    productId: secondProduct.id,
                    quantity: 2,
                },
            ],
        };
        const result = await createOrderUseCase.execute(order);

        expect(result).toEqual<IOrder>({
            id: expect.any(String),
            createdAt: expect.any(Date),
            customer,
            discount: 0,
            totalPrice: 50,
            discountedPrice: 50,
            installments: 5,
            products: [
                {
                    product: firstProduct,
                    quantity: 1,
                },
                {
                    product: secondProduct,
                    quantity: 2,
                },
            ],
        });
    });

    it('should throw if trying to create the order during the weekend', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };

        jest.setSystemTime(saturdayDate);

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Cannot accept orders during the weekend',
        );

        jest.setSystemTime(sundayDate);

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Cannot accept orders during the weekend',
        );
    });

    it('should throw if trying to create the order outside of comercial time', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };

        jest.setSystemTime(nonComercialDateBeforeOpen);

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Cannot accept orders outside of the commercial time',
        );

        jest.setSystemTime(nonComercialDateAfterClose);

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Cannot accept orders outside of the commercial time',
        );
    });

    it('should throw if the customer does not exist', async () => {
        const { createOrderUseCase } = makeUseCase();

        const order: ICreateOrderDTO = {
            customerId: 'fake-id',
            installments: 1,
            products: [
                {
                    productId: 'fake-id',
                    quantity: 1,
                },
            ],
        };

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Customer not found',
        );
    });

    it('should throw if one of the products dont exist', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
                {
                    productId: 'fake-id',
                    quantity: 1,
                },
            ],
        };

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Product not found',
        );
    });

    it('should throw if the total discount price is greater than the customer credit limit', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 10,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 16,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Customer credit limit exceeded',
        );
    });

    it('should throw if the number of installments is greater thant the customer installment limit', async () => {
        const { createOrderUseCase, customersRepository, productsRepository } =
            makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 1,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 2,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'Customer installment limit exceeded',
        );
    });

    it('should throw if an error occurs', async () => {
        const {
            createOrderUseCase,
            customersRepository,
            ordersRepository,
            productsRepository,
        } = makeUseCase();

        const customer = await customersRepository.create({
            address: faker.address.streetAddress(),
            creditLimit: 900,
            installmentLimit: 10,
            name: faker.name.firstName(),
        });
        const product = await productsRepository.create({
            description: faker.lorem.sentence(),
            name: faker.commerce.productName(),
            price: 10,
            slug: faker.lorem.slug(),
        });

        const order: ICreateOrderDTO = {
            customerId: customer.id,
            installments: 1,
            products: [
                {
                    productId: product.id,
                    quantity: 1,
                },
            ],
        };

        ordersRepository.create = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(createOrderUseCase.execute(order)).rejects.toThrow(
            'An error occurred',
        );
    });
});
