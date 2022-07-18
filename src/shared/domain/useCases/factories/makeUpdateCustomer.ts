import makeCustomersRepository from '@/shared/domain/repositories/factories/makeCustomersRepository';
import UpdateCustomer from '@/shared/domain/useCases/UpdateCustomer';

let instance: UpdateCustomer | null = null;

export default function makeUpdateCustomer(): UpdateCustomer {
    if (!instance) {
        const repository = makeCustomersRepository();

        instance = new UpdateCustomer(repository);
    }

    return instance;
}
