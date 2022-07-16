import faker from 'faker';

import { ICustomer } from '@/shared/domain/entities/Customer';
import { Order } from '@/shared/domain/entities/Order';
import { FakeOrdersRepository } from '@/shared/domain/repositories/fakes/FakeOrdersRepository';

import GetOrders from './GetOrders';

const FakeOrderDTO = () =>
    new Order({
        customer: {} as ICustomer,
        installments: faker.datatype.number(12),
        productOrders: [],
    });

describe('CreateOrder', () => {
    it('should list all created orders', async () => {
        const repository = new FakeOrdersRepository();
        const getOrdersUseCase = new GetOrders(repository);

        const orders = Array.from({ length: 3 }, () => FakeOrderDTO());

        const createdOrders = await Promise.all(
            orders.map(order => repository.create(order)),
        );

        const result = await getOrdersUseCase.execute();

        expect(result).toEqual(createdOrders);
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeOrdersRepository();
        const getOrdersUseCase = new GetOrders(repository);
        repository.getAll = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(getOrdersUseCase.execute()).rejects.toThrow('An error occurred');
    });
});
