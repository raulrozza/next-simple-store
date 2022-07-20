import { FC } from 'react';

import { useCartValue } from '@/shared/presentation/contexts';
import {
    CartListItem,
    Spacing,
} from '@/shared/presentation/view/components/atoms';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { Container, Content, List } from './styles';

const Cart: FC = () => {
    const cart = useCartValue();

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
                        </List>
                    ) : (
                        <p>No items added yet.</p>
                    )}
                </Content>
            </Container>
        </section>
    );
};

export default Cart;
