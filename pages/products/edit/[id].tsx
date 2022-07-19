import { FC } from 'react';

import Head from 'next/head';

import EditProduct from '@/shared/presentation/view/pages/EditProduct';

const EditProductPage: FC = () => {
    return (
        <>
            <Head>
                <title>Edit | Next Simple Store</title>
            </Head>

            <EditProduct />
        </>
    );
};

export default EditProductPage;
