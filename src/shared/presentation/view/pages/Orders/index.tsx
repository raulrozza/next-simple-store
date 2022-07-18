import { FC } from 'react';

import { useRouter } from 'next/router';

import { Menu } from '@/shared/presentation/view/components/organisms';

const Orders: FC = () => {
    const { pathname } = useRouter();

    return (
        <section>
            <Menu activeItem={pathname} />
        </section>
    );
};

export default Orders;
