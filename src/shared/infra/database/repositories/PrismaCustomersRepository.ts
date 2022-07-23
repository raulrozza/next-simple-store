import { ICustomer } from '@/shared/domain/entities/Customer';
import {
    ICustomerQueryParams,
    ICustomersRepository,
} from '@/shared/domain/repositories/ICustomersRepository';
import { prisma } from '@/shared/infra/database/prisma';

export class PrismaCustomersRepository implements ICustomersRepository {
    public async getAll({ query }: ICustomerQueryParams = {}): Promise<
        ICustomer[]
    > {
        const where = query
            ? {
                  name: query,
              }
            : undefined;

        return prisma.customer.findMany({
            where,
        });
    }

    public async getById(id: string): Promise<ICustomer | undefined> {
        const customer = await prisma.customer.findUnique({
            where: {
                id,
            },
        });

        return customer || undefined;
    }

    public async create({
        name,
        address,
        creditLimit,
        installmentLimit,
    }: Omit<ICustomer, 'id'>): Promise<ICustomer> {
        return prisma.customer.create({
            data: {
                name,
                address,
                creditLimit,
                installmentLimit,
            },
        });
    }

    public async update({
        id,
        name,
        address,
        creditLimit,
        installmentLimit,
    }: ICustomer): Promise<ICustomer> {
        return prisma.customer.update({
            where: {
                id,
            },
            data: {
                name,
                address,
                creditLimit,
                installmentLimit,
            },
        });
    }
}
