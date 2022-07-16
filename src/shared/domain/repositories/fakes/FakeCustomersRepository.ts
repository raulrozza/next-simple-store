import faker from 'faker';

import { ICustomer } from '@/shared/domain/entities/Customer';
import {
    ICustomersRepository,
    ICustomerQueryParams,
} from '@/shared/domain/repositories/ICustomersRepository';

export class FakeCustomersRepository implements ICustomersRepository {
    private customers: ICustomer[] = [];

    public async getAll(
        params: ICustomerQueryParams = {},
    ): Promise<ICustomer[]> {
        if (!params) return this.customers;

        return this.customers.filter(customer => {
            let matchesParams = true;

            if (params.name && !customer.name.includes(params.name))
                matchesParams = false;

            return matchesParams;
        });
    }

    public async getById(id: string): Promise<ICustomer | undefined> {
        const findCustomer = this.customers.find(
            customer => customer.id === id,
        );

        return findCustomer;
    }

    public async create(customer: Omit<ICustomer, 'id'>): Promise<ICustomer> {
        const newCustomer: ICustomer = {
            id: faker.random.uuid(),
            ...customer,
        };

        this.customers.push(newCustomer);

        return newCustomer;
    }

    public async update(customer: ICustomer): Promise<ICustomer> {
        const findIndex = this.customers.findIndex(
            findCustomer => findCustomer.id === customer.id,
        );

        if (findIndex === -1) throw new Error('Customer not found');

        this.customers[findIndex] = customer;

        return customer;
    }
}