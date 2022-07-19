import { IProduct } from '@/shared/domain/entities/Product';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

export default class GetSingleProduct {
    constructor(private readonly productsRepository: IProductsRepository) {}

    async execute(id: string): Promise<IProduct | undefined> {
        return this.productsRepository.getById(id);
    }
}
