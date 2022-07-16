import faker from 'faker';

import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { IProduct } from '@/shared/domain/entities/Product';
import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';

import UpdateProduct from './UpdateProduct';

describe('UpdateProduct', () => {
    it('should update a product', async () => {
        const repository = new FakeProductsRepository();
        const updateProductUseCase = new UpdateProduct(repository);

        const originalProduct: ICreateProductDTO = {
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            price: faker.datatype.number(),
            slug: faker.commerce.productName(),
        };
        const product = await repository.create(originalProduct);

        const result = await updateProductUseCase.execute({
            ...product,
            name: 'Edited name',
        });

        expect(result).toEqual<IProduct>({
            id: expect.any(String),
            name: 'Edited name',
            description: product.description,
            price: product.price,
            slug: product.slug,
        });
    });

    it('should throw an error if the product does not exist', async () => {
        const repository = new FakeProductsRepository();
        const updateProductUseCase = new UpdateProduct(repository);

        expect(
            updateProductUseCase.execute({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                description: faker.lorem.paragraph(),
                price: faker.datatype.number(),
                slug: faker.commerce.productName(),
            }),
        ).rejects.toThrow('Product not found');
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeProductsRepository();
        const updateProductUseCase = new UpdateProduct(repository);
        repository.update = jest.fn(() => {
            throw new Error('An error occurred');
        });

        const product = await repository.create({
            name: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            price: faker.datatype.number(),
            slug: faker.commerce.productName(),
        });

        expect(updateProductUseCase.execute(product)).rejects.toThrow(
            'An error occurred',
        );
    });
});
