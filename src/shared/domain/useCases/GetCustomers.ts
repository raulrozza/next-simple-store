import { ICustomer } from '@/shared/domain/entities/Customer';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';

export default class GetCustomers {
    constructor(private readonly customersRepository: ICustomersRepository) {}

    async execute(params?: { query?: string }): Promise<ICustomer[]> {
        return this.customersRepository.getAll(params);
    }
}
