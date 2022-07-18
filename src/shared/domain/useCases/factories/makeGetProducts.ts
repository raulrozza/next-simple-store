import makeProductsRepository from '@/shared/domain/repositories/factories/makeProductsRepository';
import GetProducts from '@/shared/domain/useCases/GetProducts';

let instance: GetProducts | null = null;

export default function makeGetProducts(): GetProducts {
    if (!instance) {
        const repository = makeProductsRepository();

        instance = new GetProducts(repository);
    }

    return instance;
}
