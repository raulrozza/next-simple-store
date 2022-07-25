import { FC } from 'react';

import { IOrder } from '@/shared/domain/entities/Order';
import Spacing from '@/shared/presentation/view/components/atoms/Spacing';

import { Container, List } from './styles';

interface OrderInfoItemProps {
    order: IOrder;
}

const OrderInfoItem: FC<OrderInfoItemProps> = ({ order }) => (
    <Container>
        <strong>{order.customer.name}</strong>

        <span>Total: ${order.discountedPrice.toFixed(2)}</span>

        <List>
            <strong>Products ({order.products.length})</strong>

            <Spacing size={2} />

            {order.products.map(entry => (
                <li key={entry.product.id}>
                    <span>
                        x{entry.quantity} {entry.product.name}
                    </span>
                    <span>${entry.product.price.toFixed(2)}</span>
                </li>
            ))}
        </List>
    </Container>
);

export default OrderInfoItem;
