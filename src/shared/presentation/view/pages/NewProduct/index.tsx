import { FC } from 'react';

import { Formik } from 'formik';

import { Form } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

// import { Container } from './styles';

const NewProduct: FC = () => {
    return (
        <section>
            <Menu activeItem="/products" />

            <main>
                <Formik
                    initialValues={{ name: '', description: '' }}
                    onSubmit={console.log}
                >
                    <Form
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
                        ]}
                        button={{
                            text: 'Create',
                        }}
                    />
                </Formik>
            </main>
        </section>
    );
};

export default NewProduct;
