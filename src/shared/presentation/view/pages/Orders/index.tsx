import { FC } from 'react';

import { OrderInfoItem } from '@/shared/presentation/view/components/atoms';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityManagerList } from '@/shared/presentation/view/components/templates';

import { useOrdersController } from './hooks';

const Orders: FC = () => {
    const { orders } = useOrdersController();

    return (
        <section>
            <Menu activeItem="/orders" />

            <EntityManagerList
                title="Orders"
                items={orders}
                emptyText="There are no orders yet."
                renderItem={({ item }) => (
                    <OrderInfoItem key={item.id} order={item} />
                )}
            />
        </section>
    );
};

export default Orders;
