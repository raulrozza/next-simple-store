import { FC } from 'react';

import { Formik } from 'formik';

import { ProductSchema } from '@/shared/presentation/validation/ProductSchema';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityForm } from '@/shared/presentation/view/components/templates';

import { useNewProductController } from './hooks';

const INITIAL_VALUES = {
    name: '',
    description: '',
    slug: '',
    price: '',
};

const NewProduct: FC = () => {
    const { createProduct } = useNewProductController();

    return (
        <section>
            <Menu activeItem="/products" />

            <Formik
                initialValues={INITIAL_VALUES}
                onSubmit={createProduct}
                validationSchema={ProductSchema}
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
