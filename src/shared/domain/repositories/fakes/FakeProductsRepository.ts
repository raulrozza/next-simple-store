import faker from 'faker';

import { IProduct } from '@/shared/domain/entities/Product';
import { IProductQueryParams } from '@/shared/domain/repositories/IProductsRepository';

export class FakeProductsRepository {
    private products: IProduct[] = [];

    public async getAll(params: IProductQueryParams = {}): Promise<IProduct[]> {
        return this.products.filter(product => {
            let matchesParams = true;

            if (
                params.nameOrSlug &&
                !(
                    product.name.includes(params.nameOrSlug) ||
                    product.slug.includes(params.nameOrSlug)
                )
            )
                matchesParams = false;

            return matchesParams;
        });
    }

    public async getById(id: string): Promise<IProduct | undefined> {
        const findProduct = this.products.find(product => product.id === id);

        return findProduct;
    }

    public async create(product: Omit<IProduct, 'id'>): Promise<IProduct> {
        const newProduct: IProduct = {
            id: faker.datatype.uuid(),
            ...product,
        };

        this.products.push(newProduct);

        return newProduct;
    }

    public async update(product: IProduct): Promise<IProduct> {
        const findIndex = this.products.findIndex(
            findProduct => findProduct.id === product.id,
        );

        this.products[findIndex] = product;

        return product;
    }
}
