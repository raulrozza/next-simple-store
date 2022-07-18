import { FC } from 'react';

import { useRouter } from 'next/router';

import { Menu } from '@/shared/presentation/view/components/organisms';

const Customers: FC = () => {
    const { pathname } = useRouter();

    return (
        <div>
            <Menu activeItem={pathname} />
        </div>
    );
};

export default Customers;
