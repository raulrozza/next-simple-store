import { ButtonHTMLAttributes, FC } from 'react';

import { FaCartPlus, FaEdit, FaPlus } from 'react-icons/fa';

import { StyledButton } from './styles';

const ICONS = {
    edit: FaEdit,
    plus: FaPlus,
    cart: FaCartPlus,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: keyof typeof ICONS;
    asAnchor?: boolean;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, icon, asAnchor, ...props }) => {
    const Icon = icon && ICONS[icon];

    return (
        <StyledButton as={asAnchor ? 'a' : 'button'} {...props}>
            {Icon && <Icon data-testid="button-Icon" />}
            {children}
        </StyledButton>
    );
};

export default Button;
