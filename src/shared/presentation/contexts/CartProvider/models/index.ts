import { IProduct } from '@/shared/domain/entities/Product';

export type CartEntry = {
    product: IProduct;
    quantity: number;
};
