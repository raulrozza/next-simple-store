import { FC } from 'react';

import { Formik } from 'formik';

import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityForm } from '@/shared/presentation/view/components/templates';

const NewProduct: FC = () => {
    return (
        <section>
            <Menu activeItem="/products" />

            <Formik
                initialValues={{
                    name: '',
                    description: '',
                    slug: '',
                    price: '',
                }}
                onSubmit={console.log}
            >
                <EntityForm
                    title="Create Product"
                    fields={[
                        {
                            type: 'text',
                            name: 'name',
                            placeholder: 'Name',
                        },
                        {
                            type: 'textarea',
                            name: 'description',
                            placeholder: 'Description',
                        },
                        {
                            type: 'text',
                            name: 'slug',
                            placeholder: 'Slug',
                        },
                        {
                            type: 'text',
                            name: 'price',
                            placeholder: 'Price',
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

export default NewProduct;
