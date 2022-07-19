import faker from 'faker';

import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';

import GetSingleProduct from './GetSingleProduct';

const FakeProductDTO = (): ICreateProductDTO => ({
    name: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    price: faker.datatype.number(),
    slug: faker.commerce.productName(),
});

describe('CreateProduct', () => {
    it('should return the existent product', async () => {
        const repository = new FakeProductsRepository();
        const getSingleProductUseCase = new GetSingleProduct(repository);

        const product = await repository.create(FakeProductDTO());

        const result = await getSingleProductUseCase.execute(product.id);

        expect(result).toEqual(product);
    });

    it('should return undefined if the product cannot be found', async () => {
        const repository = new FakeProductsRepository();
        const getSingleProductUseCase = new GetSingleProduct(repository);

        const result = await getSingleProductUseCase.execute('non-existent-id');

        expect(result).toBeUndefined();
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeProductsRepository();
        const getSingleProductUseCase = new GetSingleProduct(repository);
        repository.getById = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(getSingleProductUseCase.execute('id')).rejects.toThrow(
            'An error occurred',
        );
    });
});
