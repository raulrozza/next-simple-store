import makeCustomersRepository from '@/shared/domain/repositories/factories/makeCustomersRepository';
import GetCustomers from '@/shared/domain/useCases/GetCustomers';

let instance: GetCustomers | null = null;

export default function makeGetCustomers(): GetCustomers {
    if (!instance) {
        const repository = makeCustomersRepository();

        instance = new GetCustomers(repository);
    }

    return instance;
}
