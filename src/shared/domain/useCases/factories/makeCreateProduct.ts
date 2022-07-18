import makeProductsRepository from '@/shared/domain/repositories/factories/makeProductsRepository';
import CreateProduct from '@/shared/domain/useCases/CreateProduct';

let instance: CreateProduct | null = null;

export default function makeCreateProduct(): CreateProduct {
    if (!instance) {
        const repository = makeProductsRepository();

        instance = new CreateProduct(repository);
    }

    return instance;
}
