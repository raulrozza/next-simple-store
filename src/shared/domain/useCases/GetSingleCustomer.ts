import { ICustomer } from '@/shared/domain/entities/Customer';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';

export default class GetSingleCustomer {
    constructor(private readonly customersRepository: ICustomersRepository) {}

    async execute(id: string): Promise<ICustomer | undefined> {
        return this.customersRepository.getById(id);
    }
}
