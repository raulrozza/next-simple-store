import faker from 'faker';

import { IOrder } from '@/shared/domain/entities/Order';
import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';
export class FakeOrdersRepository implements IOrdersRepository {
    private orders: IOrder[] = [];

    public async getAll(): Promise<IOrder[]> {
        return this.orders;
    }

    public async create(order: Omit<IOrder, 'id'>): Promise<IOrder> {
        const newOrder = {
            id: faker.datatype.uuid(),
            ...order,
        };

        this.orders.push(newOrder);

        return newOrder;
    }
}
