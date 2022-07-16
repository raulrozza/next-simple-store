import { IUpdateProductDTO } from '@/shared/domain/dtos/UpdateProductDTO';
import { IProduct } from '@/shared/domain/entities/Product';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

export default class UpdateProduct {
    constructor(private readonly productsRepository: IProductsRepository) {}

    async execute(product: IUpdateProductDTO): Promise<IProduct> {
        const productExists = await this.productsRepository.getById(product.id);

        if (!productExists) throw new Error('Product not found');

        return this.productsRepository.update(product);
    }
}
