import { ComponentPropsWithoutRef, FC, useState } from 'react';

import Drawer from 'react-modern-drawer';

import { NavMenu } from '@/shared/presentation/view/components/molecules';

import { DrawerMenu, HorizontalMenu, MenuButton, MenuIcon } from './styles';

import 'react-modern-drawer/dist/index.css';

const DRAWER_SIZE = 200;

const ITEMS: ComponentPropsWithoutRef<typeof NavMenu>['items'] = [
    {
        href: '/',
        icon: 'home',
        text: 'Home',
    },
    {
        href: '/products',
        icon: 'list',
        text: 'Products',
    },
    {
        href: '/customers',
        icon: 'people',
        text: 'Customers',
    },
    {
        href: '/orders',
        icon: 'shopping',
        text: 'Orders',
    },
];

interface MenuProps {
    activeItem: '/' | '/products' | '/customers' | '/orders';
}

const Menu: FC<MenuProps> = ({ activeItem }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(open => !open);

    return (
        <section>
            <HorizontalMenu>
                <NavMenu
                    items={ITEMS}
                    activeItem={activeItem}
                    direction="row"
                />
            </HorizontalMenu>

            <DrawerMenu>
                <MenuButton onClick={toggleDrawer} role="button">
                    <MenuIcon />
                </MenuButton>

                <Drawer
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    size={DRAWER_SIZE}
                    data-testid="menu-Drawer"
                >
                    <NavMenu items={ITEMS} activeItem={activeItem} />
                </Drawer>
            </DrawerMenu>
        </section>
    );
};

export default Menu;
