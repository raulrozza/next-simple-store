import { FC } from 'react';

import { CustomerInfoItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityManagerList } from '@/shared/presentation/view/components/templates';

import { useCustomersController } from './hooks';

const Customers: FC = () => {
    const { customers, getCustomers } = useCustomersController();

    return (
        <section>
            <Menu activeItem="/customers" />

            <EntityManagerList
                upperButtons={[
                    {
                        href: '/customers/new',
                        text: 'Add Customer',
                        icon: 'plus',
                        variant: 'primary',
                    },
                ]}
                search={{
                    onSearch: text => getCustomers({ query: text }),
                    placeholder: 'Search by name',
                }}
                title="Customers"
                items={customers}
                emptyText="There are no customers yet."
                renderItem={({ item }) => <CustomerInfoItem customer={item} />}
            />
        </section>
    );
};

export default Customers;
