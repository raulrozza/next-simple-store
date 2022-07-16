import faker from 'faker';

import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { IProduct } from '@/shared/domain/entities/Product';
import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';

import CreateProduct from './CreateProduct';

describe('CreateProduct', () => {
    it('should create a product', async () => {
        const repository = new FakeProductsRepository();
        const createProductUseCase = new CreateProduct(repository);

        const product: ICreateProductDTO = {
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            price: faker.datatype.number(),
            slug: faker.commerce.productName(),
        };
        const result = await createProductUseCase.execute(product);

        expect(result).toEqual<IProduct>({
            id: expect.any(String),
            name: product.name,
            description: product.description,
            price: product.price,
            slug: product.slug,
        });
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeProductsRepository();
        const createProductUseCase = new CreateProduct(repository);
        repository.create = jest.fn(() => {
            throw new Error('An error occurred');
        });

        const product: ICreateProductDTO = {
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            price: faker.datatype.number(),
            slug: faker.commerce.productName(),
        };

        expect(createProductUseCase.execute(product)).rejects.toThrow(
            'An error occurred',
        );
    });
});
