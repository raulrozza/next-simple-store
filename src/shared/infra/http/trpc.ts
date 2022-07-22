import { createReactQueryHooks } from '@trpc/react';

import type { AppRouter } from '@/shared/infra/routes';

export const trpc = createReactQueryHooks<AppRouter>();
