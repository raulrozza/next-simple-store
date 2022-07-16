import { ICreateProductOrderDTO } from '@/shared/domain/dtos/CreateOrderDTO';
import { IOrder } from '@/shared/domain/entities/Order';

type ICreateOrder = Omit<IOrder, 'id' | 'customer' | 'products'> & {
    customerId: string;
    products: ICreateProductOrderDTO[];
};

export default interface IOrdersRepository {
    getAll(): Promise<IOrder[]>;

    create(order: ICreateOrder): Promise<IOrder>;
}
