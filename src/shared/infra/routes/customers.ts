import * as trpc from '@trpc/server';
import * as z from 'zod';

import makeCreateCustomer from '@/shared/domain/useCases/factories/makeCreateCustomer';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';
import makeGetSingleCustomer from '@/shared/domain/useCases/factories/makeGetSingleCustomer';
import makeUpdateCustomer from '@/shared/domain/useCases/factories/makeUpdateCustomer';
import {
    CustomerCreationSchema,
    CustomerEditionSchema,
} from '@/shared/infra/validation/CustomerSchema';

export const customerRoutes = trpc
    .router()
    .query('getAll', {
        input: z.object({
            query: z.string().optional(),
        }),
        resolve({ input }) {
            const getUseCase = makeGetCustomers();

            return getUseCase.execute(input);
        },
    })
    .query('getOne', {
        input: z.object({
            id: z.string(),
        }),
        resolve({ input }) {
            const findUseCase = makeGetSingleCustomer();

            return findUseCase.execute(input.id);
        },
    })
    .mutation('create', {
        input: CustomerCreationSchema,
        resolve({ input }) {
            const createUseCase = makeCreateCustomer();

            return createUseCase.execute(input);
        },
    })
    .mutation('update', {
        input: CustomerEditionSchema,
        resolve({ input }) {
            const updateUseCase = makeUpdateCustomer();

            return updateUseCase.execute(input);
        },
    });
