import { FC } from 'react';

import { Formik, Form } from 'formik';

import {
    Button,
    FieldFactory,
} from '@/shared/presentation/view/components/atoms';
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
                    <Form>
                        <FieldFactory
                            type="text"
                            name="name"
                            placeholder="Name"
                        />

                        <FieldFactory
                            type="textarea"
                            name="description"
                            placeholder="Description"
                        />

                        <Button type="submit" variant="secondary">
                            Create
                        </Button>
                    </Form>
                </Formik>
            </main>
        </section>
    );
};

export default NewProduct;
