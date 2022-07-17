import Head from 'next/head';

import Home from '@/shared/presentation/view/pages/Home';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Next Simple Store</title>
            </Head>

            <Home />
        </>
    );
}
