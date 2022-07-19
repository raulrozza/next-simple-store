import { FC } from 'react';

// import { CustomerInfoItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityManagerList } from '@/shared/presentation/view/components/templates';

import { useCustomersController } from './hooks';

const Customers: FC = () => {
    const { customers } = useCustomersController();

    return (
        <section>
            <Menu activeItem="/customers" />

            <EntityManagerList
                addButton={{
                    href: '/customers/new',
                    text: 'Add Customer',
                }}
                title="Customers"
                items={customers}
                emptyText="There are no customers yet."
                renderItem={({ item }) => <div>{item.name}</div>} // <CustomerInfoItem customer={item} />
            />
        </section>
    );
};

export default Customers;
