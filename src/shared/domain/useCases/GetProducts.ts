import { IProduct } from '@/shared/domain/entities/Product';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

export default class GetProducts {
    constructor(private readonly productsRepository: IProductsRepository) {}

    async execute(params?: { query?: string }): Promise<IProduct[]> {
        return this.productsRepository.getAll({
            nameOrSlug: params?.query,
        });
    }
}
