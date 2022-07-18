import Head from 'next/head';

import Products from '@/shared/presentation/view/pages/Products';

export default function ProductsPage() {
    return (
        <>
            <Head>
                <title>Products | Next Simple Store</title>
            </Head>

            <Products />
        </>
    );
}
