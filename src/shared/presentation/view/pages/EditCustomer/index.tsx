import { FC } from 'react';

import { Formik } from 'formik';

import { CustomerSchema } from '@/shared/presentation/validation/CustomerSchema';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityForm } from '@/shared/presentation/view/components/templates';

import { useEditCustomerController } from './hooks';

const EditCustomer: FC = () => {
    const { customer, updateCustomer } = useEditCustomerController();

    if (!customer) return null;

    return (
        <section>
            <Menu activeItem="/customers" />

            <Formik
                initialValues={{
                    name: customer.name,
                    address: customer.address,
                    creditLimit: String(customer.creditLimit),
                    installmentLimit: String(customer.installmentLimit),
                }}
                onSubmit={updateCustomer}
                validationSchema={CustomerSchema}
            >
                <EntityForm
                    title="Edit Customer"
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
                        text: 'Save',
                    }}
                />
            </Formik>
        </section>
    );
};

export default EditCustomer;
