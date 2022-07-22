import * as trpc from '@trpc/server';

import { customerRoutes } from './customers';
import { orderRoutes } from './orders';
import { productRoutes } from './products';

export const appRouter = trpc
    .router()
    .merge('products.', productRoutes)
    .merge('orders.', orderRoutes)
    .merge('customers.', customerRoutes);

export type AppRouter = typeof appRouter;
