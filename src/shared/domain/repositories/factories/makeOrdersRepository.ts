import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';
import { PrismaOrdersRepository } from '@/shared/infra/database/repositories/PrismaOrdersRepository';

let instance: IOrdersRepository | null = null;

export default function makeOrdersRepository(): IOrdersRepository {
    if (!instance) {
        instance = new PrismaOrdersRepository();
    }

    return instance;
}
