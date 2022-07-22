import * as trpc from '@trpc/server';
import * as yup from 'yup';

export const appRouter = trpc.router().query('hello', {
    input: yup.object({
        text: yup.string(),
    }),
    resolve({ input }) {
        return {
            greeting: `hello ${input?.text ?? 'world'}`,
        };
    },
});

export type AppRouter = typeof appRouter;
