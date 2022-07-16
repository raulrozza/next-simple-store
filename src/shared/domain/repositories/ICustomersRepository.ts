import { ICustomer } from '@/shared/domain/entities/Customer';

export type ICustomerQueryParams = {
    name?: string;
};

export interface ICustomersRepository {
    getAll(params?: ICustomerQueryParams): Promise<ICustomer[]>;
    getById(id: string): Promise<ICustomer | undefined>;

    create(customer: Omit<ICustomer, 'id'>): Promise<ICustomer>;
    update(customer: ICustomer): Promise<ICustomer>;
}
