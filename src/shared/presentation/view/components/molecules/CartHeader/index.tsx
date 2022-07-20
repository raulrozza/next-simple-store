import { FC } from 'react';

import { Cart } from '@/shared/presentation/view/components/atoms';

import { Header } from './styles';

interface CartHeaderProps {
    title: string;
}

const CartHeader: FC<CartHeaderProps> = ({ title }) => (
    <Header>
        <h1>{title}</h1>

        <Cart />
    </Header>
);

export default CartHeader;
