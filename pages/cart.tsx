import Head from 'next/head';

import Cart from '@/shared/presentation/view/pages/Cart';

export default function CartPage() {
    return (
        <>
            <Head>
                <title>Cart | Next Simple Store</title>
            </Head>

            <Cart />
        </>
    );
}
