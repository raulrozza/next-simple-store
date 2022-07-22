import { FC } from 'react';

import { Container, TotalText } from './styles';

interface OrderTotalDisplayProps {
    title: string;
    totalText: string;
    isTotalValid: boolean;
}

const OrderTotalDisplay: FC<OrderTotalDisplayProps> = ({
    title,
    totalText,
    isTotalValid,
}) => (
    <Container>
        <h3>{title}</h3>

        <TotalText
            isValidTotal={isTotalValid}
            data-testid="orderTotalDisplay-TotalText"
        >
            {totalText}
        </TotalText>
    </Container>
);

export default OrderTotalDisplay;
