import Head from 'next/head';

import NewCustomer from '@/shared/presentation/view/pages/NewCustomer';

export default function NewCustomerPage() {
    return (
        <>
            <Head>
                <title>New Customer | Next Simple Store</title>
            </Head>

            <NewCustomer />
        </>
    );
}
