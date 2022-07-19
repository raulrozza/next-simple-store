import makeProductsRepository from '@/shared/domain/repositories/factories/makeProductsRepository';
import GetSingleProduct from '@/shared/domain/useCases/GetSingleProduct';

let instance: GetSingleProduct | null = null;

export default function makeGetSingleProduct(): GetSingleProduct {
    if (!instance) {
        const repository = makeProductsRepository();

        instance = new GetSingleProduct(repository);
    }

    return instance;
}
