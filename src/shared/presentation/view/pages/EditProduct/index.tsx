import { FC } from 'react';

import { Formik } from 'formik';

import { ProductSchema } from '@/shared/presentation/validation/ProductSchema';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityForm } from '@/shared/presentation/view/components/templates';

import { useEditProductController } from './hooks';

const EditProduct: FC = () => {
    const { product, updateProduct } = useEditProductController();

    if (!product) return null;

    return (
        <section>
            <Menu activeItem="/products" />

            <Formik
                initialValues={{
                    name: product.name,
                    description: product.description,
                    slug: product.slug,
                    price: String(product.price),
                }}
                onSubmit={updateProduct}
                validationSchema={ProductSchema}
            >
                <EntityForm
                    title="Edit Product"
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
                            placeholder: 'Price ($)',
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

export default EditProduct;
