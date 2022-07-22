import * as trpc from '@trpc/server';

import { customerRoutes } from './customers';
import { productRoutes } from './products';

export const appRouter = trpc
    .router()
    .merge('products.', productRoutes)
    .merge('customers.', customerRoutes);

export type AppRouter = typeof appRouter;
