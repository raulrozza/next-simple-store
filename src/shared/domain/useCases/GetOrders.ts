import { IOrder } from '@/shared/domain/entities/Order';
import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';

export default class GetOrders {
    constructor(private readonly ordersRepository: IOrdersRepository) {}

    async execute(): Promise<IOrder[]> {
        return this.ordersRepository.getAll();
    }
}
