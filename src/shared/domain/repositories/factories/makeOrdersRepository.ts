import { FakeOrdersRepository } from '@/shared/domain/repositories/fakes/FakeOrdersRepository';
import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';

let instance: IOrdersRepository | null = null;

export default function makeOrdersRepository(): IOrdersRepository {
    if (!instance) {
        instance = new FakeOrdersRepository();
    }

    return instance;
}
