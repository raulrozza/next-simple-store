import * as trpc from '@trpc/server';

import { productRoutes } from './products';

export const appRouter = trpc.router().merge('products.', productRoutes);

export type AppRouter = typeof appRouter;
