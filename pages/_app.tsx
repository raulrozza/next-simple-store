import { memoize } from 'lodash';
import type { AppProps } from 'next/app';

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
export default MyApp;
