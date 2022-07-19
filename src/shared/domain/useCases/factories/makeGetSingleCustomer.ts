import makeCustomersRepository from '@/shared/domain/repositories/factories/makeCustomersRepository';
import GetSingleCustomer from '@/shared/domain/useCases/GetSingleCustomer';

let instance: GetSingleCustomer | null = null;

export default function makeGetSingleCustomer(): GetSingleCustomer {
    if (!instance) {
        const repository = makeCustomersRepository();

        instance = new GetSingleCustomer(repository);
    }

    return instance;
}
