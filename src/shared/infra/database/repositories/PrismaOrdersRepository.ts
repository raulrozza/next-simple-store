import { IOrder } from '@/shared/domain/entities/Order';
import { IOrdersRepository } from '@/shared/domain/repositories/IOrdersRepository';
import { prisma } from '@/shared/infra/database/prisma';

export class PrismaOrdersRepository implements IOrdersRepository {
    public async getAll(): Promise<IOrder[]> {
        return prisma.order.findMany({
            include: {
                customer: true,
                products: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }

    public async create({
        customer,
        discount,
        discountedPrice,
        installments,
        products,
        totalPrice,
    }: Omit<IOrder, 'id'>): Promise<IOrder> {
        return prisma.order.create({
            data: {
                customerId: customer.id,
                discount,
                discountedPrice,
                installments,
                totalPrice,
                products: {
                    create: products.map(({ product, quantity }) => ({
                        productId: product.id,
                        quantity,
                    })),
                },
            },
            include: {
                customer: true,
                products: {
                    include: {
                        product: true,
                    },
                },
            },
        });
    }
}
