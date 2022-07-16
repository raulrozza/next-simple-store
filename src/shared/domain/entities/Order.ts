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

type IOrderBuildParams = {
    customer: ICustomer;
    productOrders: IProductOrder[];
    installments: number;
};

const DISCOUNT = 0.1;

export class Order implements Omit<IOrder, 'id'> {
    public customer: ICustomer;
    public products: IProductOrder[];
    public installments: number;
    public discount: number;
    public totalPrice: number;
    public discountedPrice: number;
    public createdAt: Date;

    constructor({ customer, installments, productOrders }: IOrderBuildParams) {
        this.customer = customer;
        this.installments = installments;
        this.products = productOrders;
        this.totalPrice = this.calculateTotalPrice(productOrders);
        this.discount = installments > 1 ? 0 : DISCOUNT;
        this.discountedPrice = this.calculateDiscountedPrice(
            this.totalPrice,
            this.discount,
        );
        this.createdAt = new Date();
    }

    private calculateTotalPrice(productOrders: IProductOrder[]) {
        return productOrders.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0,
        );
    }

    private calculateDiscountedPrice(totalPrice: number, discount: number) {
        return totalPrice * (1 - discount);
    }
}
