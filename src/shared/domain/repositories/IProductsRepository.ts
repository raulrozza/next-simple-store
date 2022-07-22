import { IProduct } from '@/shared/domain/entities/Product';

export type IProductQueryParams = {
    nameOrSlug?: string;
};

export interface IProductsRepository {
    getAll(params?: IProductQueryParams): Promise<IProduct[]>;
    getById(id: string): Promise<IProduct | undefined>;

    create(product: Omit<IProduct, 'id'>): Promise<IProduct>;
    update(product: IProduct): Promise<IProduct>;
}
