import * as trpc from '@trpc/server';
import * as z from 'zod';

import makeCreateProduct from '@/shared/domain/useCases/factories/makeCreateProduct';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';
import makeGetSingleProduct from '@/shared/domain/useCases/factories/makeGetSingleProduct';
import makeUpdateProduct from '@/shared/domain/useCases/factories/makeUpdateProduct';
import {
    ProductCreationSchema,
    ProductEditionCreationSchema,
} from '@/shared/infra/validation/ProductSchema';

export const productRoutes = trpc
    .router()
    .query('getAll', {
        input: z.object({
            query: z.string().optional(),
        }),
        resolve({ input }) {
            const getUseCase = makeGetProducts();

            return getUseCase.execute(input);
        },
    })
    .query('getOne', {
        input: z.object({
            id: z.string(),
        }),
        resolve({ input }) {
            const findUseCase = makeGetSingleProduct();

            return findUseCase.execute(input.id);
        },
    })
    .mutation('create', {
        input: ProductCreationSchema,
        resolve({ input }) {
            const createUseCase = makeCreateProduct();

            return createUseCase.execute(input);
        },
    })
    .mutation('update', {
        input: ProductEditionCreationSchema,
        resolve({ input }) {
            const updateUseCase = makeUpdateProduct();

            return updateUseCase.execute(input);
        },
    });
