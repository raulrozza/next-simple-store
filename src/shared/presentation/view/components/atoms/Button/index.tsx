import { ButtonHTMLAttributes, FC } from 'react';

import { FaPlus } from 'react-icons/fa';

import { StyledButton } from './styles';

const ICONS = {
    plus: FaPlus,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: keyof typeof ICONS;
    asAnchor?: boolean;
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
