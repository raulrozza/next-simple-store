import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';

export default class CreateCustomer {
    constructor(private readonly customersRepository: ICustomersRepository) {}

    async execute(customer: ICreateCustomerDTO): Promise<ICustomer> {
        return this.customersRepository.create(customer);
    }
}
