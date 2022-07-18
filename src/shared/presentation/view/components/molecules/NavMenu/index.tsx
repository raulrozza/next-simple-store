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
    children?: never;
}

const NavMenu: FC<NavMenuProps> = ({ items, activeItem }) => (
    <Container>
        {items.map(item => (
            <ListItem key={item.href}>
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
