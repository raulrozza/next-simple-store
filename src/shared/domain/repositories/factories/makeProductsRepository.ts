import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';
import { PrismaProductsRepository } from '@/shared/infra/database/repositories/PrismaProductsRepository';

let instance: IProductsRepository | null = null;

export default function makeProductsRepository(): IProductsRepository {
    if (!instance) {
        instance = new PrismaProductsRepository();
    }

    return instance;
}
