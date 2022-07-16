import { ICustomer } from '@/shared/domain/entities/Customer';
import { IProduct } from '@/shared/domain/entities/Product';

export interface IProductOrder {
    product: IProduct;
    quantity: number;
}

export interface IOrder {
    id: string;
    customer: ICustomer;
    products: IProductOrder[];
    installments: number;
    discount: number;
    totalPrice: number;
    discountedPrice: number;
    createdAt: Date;
}
