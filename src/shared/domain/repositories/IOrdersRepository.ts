import { IOrder } from '@/shared/domain/entities/Order';

export interface IOrdersRepository {
    getAll(): Promise<IOrder[]>;

    create(order: Omit<IOrder, 'id'>): Promise<IOrder>;
}
