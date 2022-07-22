import faker from 'faker';

import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';

import GetProducts from './GetProducts';

const FakeProductDTO = (): ICreateProductDTO => ({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    price: faker.datatype.number(),
    slug: faker.commerce.productName(),
});

describe('CreateProduct', () => {
    it('should list all created products', async () => {
        const repository = new FakeProductsRepository();
        const getProductsUseCase = new GetProducts(repository);

        const products = Array.from({ length: 3 }, () => FakeProductDTO());

        const createdProducts = await Promise.all(
            products.map(product => repository.create(product)),
        );

        const result = await getProductsUseCase.execute();

        expect(result).toEqual(createdProducts);
    });

    it('should return only the products with the given name', async () => {
        const repository = new FakeProductsRepository();
        const getProductsUseCase = new GetProducts(repository);

        const products = Array.from({ length: 3 }, () => FakeProductDTO());

        const createdProducts = await Promise.all(
            products.map(product => repository.create(product)),
        );

        const result = await getProductsUseCase.execute({
            query: createdProducts[0].name,
        });

        expect(result).toEqual([createdProducts[0]]);
    });

    it('should return only the products with the given slug', async () => {
        const repository = new FakeProductsRepository();
        const getProductsUseCase = new GetProducts(repository);

        const products = Array.from({ length: 3 }, () => FakeProductDTO());

        const createdProducts = await Promise.all(
            products.map(product => repository.create(product)),
        );

        const result = await getProductsUseCase.execute({
            query: createdProducts[1].slug,
        });

        expect(result).toEqual([createdProducts[1]]);
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeProductsRepository();
        const getProductsUseCase = new GetProducts(repository);
        repository.getAll = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(getProductsUseCase.execute()).rejects.toThrow(
            'An error occurred',
        );
    });
});
