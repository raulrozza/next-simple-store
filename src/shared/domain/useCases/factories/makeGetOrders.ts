import makeOrdersRepository from '@/shared/domain/repositories/factories/makeOrdersRepository';
import GetOrders from '@/shared/domain/useCases/GetOrders';

let instance: GetOrders | null = null;

export default function makeGetOrders(): GetOrders {
    if (!instance) {
        const repository = makeOrdersRepository();

        instance = new GetOrders(repository);
    }

    return instance;
}
