import { withTRPC } from '@trpc/next';
import { memoize } from 'lodash';
import type { AppProps } from 'next/app';

import type { AppRouter } from '@/shared/infra/routes';
import AppContainer from '@/shared/presentation/view/AppContainer';

// ignore in-browser next/js recoil warnings until its fixed.
const mutedConsole = memoize(console => ({
    ...console,
    warn: (...args: any[]) =>
        args[0].includes('Duplicate atom key') ? null : console.warn(...args),
}));
global.console = mutedConsole(global.console);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    );
}

const getBaseUrl = () => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
};

export default withTRPC<AppRouter>({
    config({ ctx }) {
        const url = `${getBaseUrl()}/api/trpc`;

        return {
            url,
        };
    },
    ssr: true,
})(MyApp);
