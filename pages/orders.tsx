import Head from 'next/head';

import Orders from '@/shared/presentation/view/pages/Orders';

export default function OrdersPage() {
    return (
        <>
            <Head>
                <title>Orders | Next Simple Store</title>
            </Head>

            <Orders />
        </>
    );
}
