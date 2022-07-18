import Head from 'next/head';

import NewProduct from '@/shared/presentation/view/pages/NewProduct';

export default function NewProductPage() {
    return (
        <>
            <Head>
                <title>New Product | Next Simple Store</title>
            </Head>

            <NewProduct />
        </>
    );
}
