import { ComponentPropsWithoutRef, FC } from 'react';

import { NavLink } from '@/shared/presentation/view/components/atoms';

import { Container, ListItem } from './styles';

interface NavMenuItem
    extends Omit<ComponentPropsWithoutRef<typeof NavLink>, 'children'> {
    text: string;
}

interface NavMenuProps {
    items: NavMenuItem[];
    children?: never;
}

const NavMenu: FC<NavMenuProps> = ({ items }) => (
    <Container>
        {items.map(item => (
            <ListItem key={item.href}>
                <NavLink href={item.href} icon={item.icon}>
                    {item.text}
                </NavLink>
            </ListItem>
        ))}
    </Container>
);

export default NavMenu;
