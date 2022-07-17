import { FC, useState } from 'react';

import Drawer from 'react-modern-drawer';

import { NavMenu } from '@/shared/presentation/view/components/molecules';

import 'react-modern-drawer/dist/index.css';

const DRAWER_SIZE = 200;

const Home: FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setDrawerOpen(true)}>Show</button>
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                direction="left"
                size={DRAWER_SIZE}
            >
                <NavMenu
                    items={[
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
                    ]}
                />
            </Drawer>
        </div>
    );
};

export default Home;
