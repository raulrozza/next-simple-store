import { ComponentPropsWithoutRef, FC } from 'react';

import { CartListItem } from '@/shared/presentation/view/components/atoms';
import { CartFooter } from '@/shared/presentation/view/components/molecules';

import { List } from './styles';

interface CartItemsListProps {
    emptyText: string;
    items: ComponentPropsWithoutRef<typeof CartListItem>[];
    footer: ComponentPropsWithoutRef<typeof CartFooter>;
}

const CartItemsList: FC<CartItemsListProps> = ({
    items,
    emptyText,
    footer,
}) => {
    if (!items.length) return <p>{emptyText}</p>;

    return (
        <List>
            {items.map(item => (
                <CartListItem key={item.product.id} {...item} />
            ))}

            <CartFooter {...footer} />
        </List>
    );
};

export default CartItemsList;
