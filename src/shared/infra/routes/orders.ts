import * as trpc from '@trpc/server';

import makeCreateOrder from '@/shared/domain/useCases/factories/makeCreateOrder';
import makeGetOrders from '@/shared/domain/useCases/factories/makeGetOrders';
import { OrderSchema } from '@/shared/infra/validation/OrderSchema';

export const orderRoutes = trpc
    .router()
    .query('getAll', {
        resolve() {
            const getUseCase = makeGetOrders();

            return getUseCase.execute();
        },
    })
    .mutation('create', {
        input: OrderSchema,
        resolve({ input }) {
            const createUseCase = makeCreateOrder();

            return createUseCase.execute(input);
        },
    });
