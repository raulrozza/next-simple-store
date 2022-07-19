import { FC } from 'react';

import { Formik } from 'formik';

import { CustomerSchema } from '@/shared/presentation/validation/CustomerSchema';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityForm } from '@/shared/presentation/view/components/templates';

import { useNewCustomerController } from './hooks';

const INITIAL_VALUES = {
    name: '',
    address: '',
    creditLimit: '',
    installmentLimit: '',
};

const NewCustomer: FC = () => {
    const { createCustomer } = useNewCustomerController();

    return (
        <section>
            <Menu activeItem="/customers" />

            <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={createCustomer}
                validationSchema={CustomerSchema}
            >
                <EntityForm
                    title="Create Customer"
                    fields={[
                        {
                            type: 'text',
                            name: 'name',
                            placeholder: 'Name',
                        },
                        {
                            type: 'text',
                            name: 'address',
                            placeholder: 'Address',
                        },
                        {
                            type: 'text',
                            name: 'creditLimit',
                            placeholder: 'Credit limit ($)',
                        },
                        {
                            type: 'text',
                            name: 'installmentLimit',
                            placeholder: 'Maximum installments allowed',
                        },
                    ]}
                    button={{
                        text: 'Create',
                    }}
                />
            </Formik>
        </section>
    );
};

export default NewCustomer;
