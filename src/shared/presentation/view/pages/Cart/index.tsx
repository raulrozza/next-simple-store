import { FC } from 'react';

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
import { Menu } from '@/shared/presentation/view/components/organisms';

import { Container, Content, List, ListFooter } from './styles';

const Cart: FC = () => {
    const cart = useCartValue();
    const meta = useCartMetaValue();
    const { clear } = useCartManager();

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
                                    Clear all items.
                                </Button>
                            </ListFooter>
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
