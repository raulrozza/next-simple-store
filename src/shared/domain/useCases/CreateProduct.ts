import { ICreateProductDTO } from '@/shared/domain/dtos/CreateProductDTO';
import { IProduct } from '@/shared/domain/entities/Product';
import { IProductsRepository } from '@/shared/domain/repositories/IProductsRepository';

export default class CreateProduct {
    constructor(private readonly productsRepository: IProductsRepository) {}

    async execute(product: ICreateProductDTO): Promise<IProduct> {
        return this.productsRepository.create(product);
    }
}
