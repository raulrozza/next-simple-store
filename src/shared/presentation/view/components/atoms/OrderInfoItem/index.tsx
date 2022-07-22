import { FC } from 'react';

import { IOrder } from '@/shared/domain/entities/Order';
import Spacing from '@/shared/presentation/view/components/atoms/Spacing';

import { Container, List } from './styles';

interface OrderInfoItemProps {
    order: IOrder;
}

const OrderInfoItem: FC<OrderInfoItemProps> = ({ order }) => (
    <Container>
        <h2>{order.customer.name}</h2>

        <span>Total: ${order.discountedPrice.toFixed(2)}</span>

        <List>
            <h3>Products ({order.products.length})</h3>

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
