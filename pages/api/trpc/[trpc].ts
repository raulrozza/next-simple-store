import * as trpcNext from '@trpc/server/adapters/next';

import { appRouter } from '@/shared/infra/routes';

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
});
