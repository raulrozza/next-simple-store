import type { AppProps } from 'next/app';

import AppContainer from '@/shared/presentation/view/AppContainer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    );
}
export default MyApp;
