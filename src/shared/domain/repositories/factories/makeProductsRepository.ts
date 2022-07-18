import { FakeProductsRepository } from '@/shared/domain/repositories/fakes/FakeProductsRepository';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

let instance: IProductsRepository | null = null;

export default function makeProductsRepository(): IProductsRepository {
    if (!instance) {
        instance = new FakeProductsRepository();
    }

    return instance;
}
