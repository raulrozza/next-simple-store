import makeCustomersRepository from '@/shared/domain/repositories/factories/makeCustomersRepository';
import makeOrdersRepository from '@/shared/domain/repositories/factories/makeOrdersRepository';
import makeProductsRepository from '@/shared/domain/repositories/factories/makeProductsRepository';
import CreateOrder from '@/shared/domain/useCases/CreateOrder';

let instance: CreateOrder | null = null;

export default function makeCreateOrder(): CreateOrder {
    if (!instance) {
        const ordersRep = makeOrdersRepository();
        const productsRep = makeProductsRepository();
        const customersRep = makeCustomersRepository();

        instance = new CreateOrder(ordersRep, productsRep, customersRep);
    }

    return instance;
}
