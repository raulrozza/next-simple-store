import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { IUpdateProductDTO } from '@/shared/domain/dtos/UpdateProductDTO';
import { IProduct } from '@/shared/domain/entities/Product';

export type IProductQueryParams = {
    slug?: string;
    name?: string;
};

export interface IProductsRepository {
    getAll(params?: IProductQueryParams): Promise<IProduct[]>;
    getById(id: string): Promise<IProduct | undefined>;

    create(product: ICreateProductDTO): Promise<IProduct>;
    update(product: IUpdateProductDTO): Promise<IProduct>;
}
