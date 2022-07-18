import makeProductsRepository from '@/shared/domain/repositories/factories/makeProductsRepository';
import UpdateProduct from '@/shared/domain/useCases/UpdateProduct';

let instance: UpdateProduct | null = null;

export default function makeUpdateProduct(): UpdateProduct {
    if (!instance) {
        const repository = makeProductsRepository();

        instance = new UpdateProduct(repository);
    }

    return instance;
}
