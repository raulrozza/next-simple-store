import { FC, useMemo } from 'react';

import { FormikProvider, useFormik } from 'formik';

import {
    useCartManager,
    useCartMetaValue,
    useCartValue,
} from '@/shared/presentation/contexts';
import {
    Button,
    CartListItem,
    Spacing,
} from '@/shared/presentation/view/components/atoms';
import { Form } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { useCartController } from './hooks';
import {
    Container,
    Content,
    FinishOrderContainer,
    List,
    ListFooter,
} from './styles';

const Cart: FC = () => {
    const cart = useCartValue();
    const meta = useCartMetaValue();
    const { clear } = useCartManager();
    const { customers } = useCartController();
    const formik = useFormik({
        initialValues: {
            customer: '',
            installments: 1,
        },
        onSubmit: console.log,
    });

    const installmentOptions = useMemo(() => {
        const selectedCustomer = formik.values.customer;

        if (!selectedCustomer) return [];

        const customer = customers.find(({ id }) => id === selectedCustomer);

        if (!customer) return [];

        return Array.from(
            { length: customer.installmentLimit },
            (_, index) => ({
                value: index + 1,
                label: `${index + 1}x`,
            }),
        );
    }, [customers, formik.values.customer]);

    return (
        <section>
            <Menu activeItem="/orders" />

            <Container>
                <Content>
                    <h1>Cart</h1>

                    <Spacing size={3} />

                    {cart.length ? (
                        <List>
                            {cart.map(entry => (
                                <CartListItem
                                    key={entry.product.id}
                                    {...entry}
                                />
                            ))}

                            <ListFooter>
                                <div>
                                    <p>
                                        You have {meta.quantity} products in
                                        your cart.
                                    </p>

                                    <p>Total: ${meta.total.toFixed(2)}</p>
                                </div>

                                <Spacing size={2} />

                                <Button variant="primary" onClick={clear}>
                                    Remove all items
                                </Button>
                            </ListFooter>
                        </List>
                    ) : (
                        <p>No items added yet.</p>
                    )}

                    <Spacing size={3} />

                    <h2>Finish order</h2>

                    <FormikProvider value={formik}>
                        <FinishOrderContainer>
                            <div>
                                <Form
                                    fields={[
                                        {
                                            type: 'select',
                                            name: 'customer',
                                            placeholder: 'Select a customer',
                                            options: customers.map(
                                                customer => ({
                                                    label: customer.name,
                                                    value: customer.id,
                                                }),
                                            ),
                                        },
                                        {
                                            type: 'select',
                                            name: 'installments',
                                            placeholder:
                                                'Number of installments',
                                            options: installmentOptions,
                                            disabled:
                                                !installmentOptions.length,
                                        },
                                    ]}
                                    button={{
                                        text: 'Submit order',
                                    }}
                                />
                            </div>

                            <div>opa </div>
                        </FinishOrderContainer>
                    </FormikProvider>
                </Content>
            </Container>
        </section>
    );
};

export default Cart;
