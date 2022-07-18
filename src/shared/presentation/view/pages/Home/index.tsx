import { FC } from 'react';

import { useRouter } from 'next/router';

import { Menu } from '@/shared/presentation/view/components/organisms';

const Home: FC = () => {
    const { pathname } = useRouter();

    return (
        <div>
            <Menu
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
                activeItem={pathname}
            />
        </div>
    );
};

export default Home;
