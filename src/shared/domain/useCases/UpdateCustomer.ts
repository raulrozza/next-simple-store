import { IUpdateCustomerDTO } from '@/shared/domain/dtos/UpdateCustomerDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';

export default class UpdateCustomer {
    constructor(private readonly customersRepository: ICustomersRepository) {}

    async execute(customer: IUpdateCustomerDTO): Promise<ICustomer> {
        const customerExists = await this.customersRepository.getById(
            customer.id,
        );

        if (!customerExists) throw new Error('Customer not found');

        return this.customersRepository.update(customer);
    }
}
