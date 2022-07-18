import { ComponentPropsWithoutRef, FC } from 'react';

import { NavLink } from '@/shared/presentation/view/components/atoms';

import { Container, ListItem } from './styles';

interface NavMenuItem
    extends Omit<
        ComponentPropsWithoutRef<typeof NavLink>,
        'children' | 'active'
    > {
    text: string;
}

interface NavMenuProps {
    items: NavMenuItem[];
    activeItem: string;
    direction?: 'column' | 'row';
    children?: never;
}

const NavMenu: FC<NavMenuProps> = ({
    items,
    activeItem,
    direction = 'column',
}) => (
    <Container direction={direction} role="menu">
        {items.map(item => (
            <ListItem key={item.href} role="menuitem">
                <NavLink
                    href={item.href}
                    icon={item.icon}
                    active={activeItem === item.href}
                >
                    {item.text}
                </NavLink>
            </ListItem>
        ))}
    </Container>
);

export default NavMenu;
