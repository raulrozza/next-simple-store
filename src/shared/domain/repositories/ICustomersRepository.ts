import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { IUpdateCustomerDTO } from '@/shared/domain/dtos/UpdateCustomerDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';

export type ICustomerQueryParams = {
    name?: string;
};

export interface ICustomersRepository {
    getAll(params?: ICustomerQueryParams): Promise<ICustomer[]>;
    getById(id: string): Promise<ICustomer | undefined>;

    create(customer: ICreateCustomerDTO): Promise<ICustomer>;
    update(customer: IUpdateCustomerDTO): Promise<ICustomer>;
}
