import { FC } from 'react';

import Head from 'next/head';

import EditCustomer from '@/shared/presentation/view/pages/EditCustomer';

const EditCustomerPage: FC = () => {
    return (
        <>
            <Head>
                <title>Edit | Next Simple Store</title>
            </Head>

            <EditCustomer />
        </>
    );
};

export default EditCustomerPage;
