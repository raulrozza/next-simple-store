import Head from 'next/head';

import Customers from '@/shared/presentation/view/pages/Customers';

export default function CustomersPage() {
    return (
        <>
            <Head>
                <title>Customers | Next Simple Store</title>
            </Head>

            <Customers />
        </>
    );
}
