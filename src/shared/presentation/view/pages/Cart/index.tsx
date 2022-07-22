import { FC, useMemo } from 'react';

import { FormikProvider, useFormik } from 'formik';

import {
    useCartManager,
    useCartMetaValue,
    useCartValue,
} from '@/shared/presentation/contexts';
import {
    OrderTotalDisplay,
    Spacing,
} from '@/shared/presentation/view/components/atoms';
import { Form } from '@/shared/presentation/view/components/molecules';
import {
    CartItemsList,
    Menu,
} from '@/shared/presentation/view/components/organisms';

import { useCartController } from './hooks';
import { Container, Content, FinishOrderContainer } from './styles';

const DISCOUNT = 0.1;

const Cart: FC = () => {
    const cart = useCartValue();
    const meta = useCartMetaValue();
    const { clear } = useCartManager();
    const { createOrder, customers } = useCartController();

    const formik = useFormik({
        initialValues: {
            customer: '',
            installments: 1,
        },
        onSubmit: ({ customer, installments }) =>
            createOrder({
                customerId: customer,
                installments,
                products: cart.map(entry => ({
                    productId: entry.product.id,
                    quantity: entry.quantity,
                })),
            }),
    });

    const selectedCustomer = useMemo(() => {
        const selectedCustomer = formik.values.customer;

        if (!selectedCustomer) return undefined;

        const customer = customers.find(({ id }) => id === selectedCustomer);

        return customer;
    }, [customers, formik.values.customer]);

    const discountedTotal = useMemo(() => {
        if (formik.values.installments > 1) return meta.total;

        return meta.total * (1 - DISCOUNT);
    }, [formik.values.installments, meta.total]);

    const isValidTotal = useMemo(() => {
        if (!selectedCustomer) return false;

        return discountedTotal <= selectedCustomer.creditLimit;
    }, [discountedTotal, selectedCustomer]);

    const installmentOptions = useMemo(() => {
        if (!selectedCustomer) return [];

        return Array.from(
            { length: selectedCustomer.installmentLimit },
            (_, index) => ({
                value: index + 1,
                label: `${index + 1}x`,
            }),
        );
    }, [selectedCustomer]);

    return (
        <section>
            <Menu activeItem="/orders" />

            <Container>
                <Content>
                    <h1>Cart</h1>

                    <Spacing size={3} />

                    <CartItemsList
                        items={cart}
                        footer={{
                            bottomLabels: [
                                ` You have ${meta.quantity} products in
                            your cart.`,
                                `Total: $${meta.total.toFixed(2)}`,
                            ],
                            button: {
                                text: 'Remove all items',
                                onClick: clear,
                            },
                        }}
                        emptyText="No items added yet."
                    />

                    <Spacing size={3} />

                    <h2>Finish order</h2>

                    <Spacing size={3} />

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

                            {selectedCustomer ? (
                                <OrderTotalDisplay
                                    title="Order total"
                                    totalText={`$${discountedTotal.toFixed(2)}`}
                                    isTotalValid={isValidTotal}
                                />
                            ) : (
                                <div>
                                    <p>Select a customer to see the total</p>
                                </div>
                            )}
                        </FinishOrderContainer>
                    </FormikProvider>
                </Content>
            </Container>
        </section>
    );
};

export default Cart;
