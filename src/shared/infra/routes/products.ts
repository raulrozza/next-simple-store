import * as trpc from '@trpc/server';
import * as yup from 'yup';

import makeCreateProduct from '@/shared/domain/useCases/factories/makeCreateProduct';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';
import makeUpdateProduct from '@/shared/domain/useCases/factories/makeUpdateProduct';
import {
    ProductCreationSchema,
    ProductEditionCreationSchema,
} from '@/shared/infra/validation/ProductSchema';

export const productRoutes = trpc
    .router()
    .query('getAll', {
        input: yup.object({
            query: yup.string().optional(),
        }),
        resolve({ input }) {
            const getUseCase = makeGetProducts();

            return getUseCase.execute(input);
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
