import { ComponentPropsWithoutRef, FC, useState } from 'react';

import Drawer from 'react-modern-drawer';

import { NavMenu } from '@/shared/presentation/view/components/molecules';

import { MenuButton, MenuIcon } from './styles';

import 'react-modern-drawer/dist/index.css';

const DRAWER_SIZE = 200;

interface MenuProps {
    items: ComponentPropsWithoutRef<typeof NavMenu>['items'];
    activeItem: string;
}

const Menu: FC<MenuProps> = ({ items, activeItem }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <MenuButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </MenuButton>

            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                direction="left"
                size={DRAWER_SIZE}
            >
                <NavMenu items={items} activeItem={activeItem} />
            </Drawer>
        </div>
    );
};

export default Menu;
