import makeCustomersRepository from '@/shared/domain/repositories/factories/makeCustomersRepository';
import CreateCustomer from '@/shared/domain/useCases/CreateCustomer';

let instance: CreateCustomer | null = null;

export default function makeCreateCustomer(): CreateCustomer {
    if (!instance) {
        const repository = makeCustomersRepository();

        instance = new CreateCustomer(repository);
    }

    return instance;
}
