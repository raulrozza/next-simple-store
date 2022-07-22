import { FC } from 'react';

import { Button, Spacing } from '@/shared/presentation/view/components/atoms';

import { Footer } from './styles';

interface CartFooterProps {
    bottomLabels: string[];
    button: {
        text: string;
        onClick: () => void;
    };
}

const CartFooter: FC<CartFooterProps> = ({ bottomLabels, button }) => (
    <Footer>
        <div>
            {bottomLabels.map((label, index) => (
                <p key={`bottom-label-${index}`}>{label}</p>
            ))}
        </div>

        <Spacing size={2} />

        <Button variant="primary" onClick={button.onClick}>
            {button.text}
        </Button>
    </Footer>
);

export default CartFooter;
