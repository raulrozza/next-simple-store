import { IProduct } from '@/shared/domain/entities/Product';
import {
    IProductQueryParams,
    IProductsRepository,
} from '@/shared/domain/repositories/IProductsRepository';
import { prisma } from '@/shared/infra/database/prisma';

export class PrismaProductsRepository implements IProductsRepository {
    public async getAll({ nameOrSlug }: IProductQueryParams = {}): Promise<
        IProduct[]
    > {
        const where = nameOrSlug
            ? {
                  OR: [
                      {
                          name: nameOrSlug,
                      },
                      {
                          slug: nameOrSlug,
                      },
                  ],
              }
            : undefined;

        return prisma.product.findMany({
            where,
        });
    }

    public async getById(id: string): Promise<IProduct | undefined> {
        const product = await prisma.product.findUnique({
            where: {
                id,
            },
        });

        return product || undefined;
    }

    public async create({
        name,
        description,
        price,
        slug,
    }: Omit<IProduct, 'id'>): Promise<IProduct> {
        return prisma.product.create({
            data: {
                name,
                description,
                price,
                slug,
            },
        });
    }

    public async update({
        id,
        name,
        description,
        price,
        slug,
    }: IProduct): Promise<IProduct> {
        return prisma.product.update({
            where: {
                id,
            },
            data: {
                name,
                description,
                price,
                slug,
            },
        });
    }
}
