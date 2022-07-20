import { FC, useState } from 'react';

import { Root } from '@radix-ui/react-hover-card';
import Link from 'next/link';
import { BsFillCartFill } from 'react-icons/bs';

import { useCartMetaValue } from '@/shared/presentation/contexts';

import { Content, Trigger } from './styles';

const Cart: FC = () => {
    const { quantity, total } = useCartMetaValue();
    const [open, setOpen] = useState(false);

    return (
        <Root open={open} onOpenChange={setOpen} openDelay={0} closeDelay={0}>
            <Trigger onClick={() => setOpen(true)}>
                <BsFillCartFill />

                <strong>{quantity}</strong>
            </Trigger>

            <Content>
                <p>You currently have {quantity} products in your cart.</p>

                <p>
                    Total: <strong>${total.toFixed(2)}</strong>
                </p>

                <Link href="/cart">See my cart</Link>
            </Content>
        </Root>
    );
};

export default Cart;
