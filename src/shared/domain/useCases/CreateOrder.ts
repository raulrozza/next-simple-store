import { ICreateOrderDTO } from '@/shared/domain/dtos/CreateOrderDTO';
import { IOrder, Order } from '@/shared/domain/entities/Order';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';
import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

const COMERCIAL_OPEN_HOUR = 8;
const COMERCIAL_CLOSE_HOUR = 18;

export default class CreateOrder {
    constructor(
        private readonly ordersRepository: IOrdersRepository,
        private readonly productsRepository: IProductsRepository,
        private readonly customersRepository: ICustomersRepository,
    ) {}

    async execute({
        customerId,
        installments,
        products: productOrderRequests,
    }: ICreateOrderDTO): Promise<IOrder> {
        if (this.isWeekend())
            throw new Error('Cannot accept orders during the weekend');

        if (!this.isComercialTime())
            throw new Error(
                'Cannot accept orders outside of the commercial time',
            );

        const customer = await this.customersRepository.getById(customerId);
        if (!customer) throw new Error('Customer not found');

        const productOrders = await this.getProducts(productOrderRequests);

        const order = new Order({
            customer,
            installments,
            productOrders,
        });

        if (customer.creditLimit < order.discountedPrice)
            throw new Error('Customer credit limit exceeded');

        if (customer.installmentLimit < order.installments)
            throw new Error('Customer installment limit exceeded');

        return this.ordersRepository.create(order);
    }

    private isWeekend(): boolean {
        const date = new Date();
        const day = date.getUTCDay();
        return day === 0 || day === 6;
    }

    private isComercialTime(): boolean {
        const date = new Date();
        const hour = date.getUTCHours();
        return hour >= COMERCIAL_OPEN_HOUR && hour < COMERCIAL_CLOSE_HOUR;
    }

    private async getProducts(
        productOrders: ICreateOrderDTO['products'],
    ): Promise<IOrder['products']> {
        const products = await Promise.all(
            productOrders.map(async order => {
                const product = await this.productsRepository.getById(
                    order.productId,
                );
                if (!product) throw new Error('Product not found');

                return {
                    product,
                    quantity: order.quantity,
                };
            }),
        );

        return products;
    }
}
