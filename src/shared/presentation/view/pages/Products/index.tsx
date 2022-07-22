import { FC } from 'react';

import { ProductInfoItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityManagerList } from '@/shared/presentation/view/components/templates';

import { useProductsController } from './hooks';

const Products: FC = () => {
    const { products } = useProductsController();

    return (
        <section>
            <Menu activeItem="/products" />

            <EntityManagerList
                upperButtons={[
                    {
                        href: '/products/new',
                        text: 'Add Product',
                        icon: 'plus',
                        variant: 'primary',
                    },
                ]}
                title="Products"
                items={products}
                emptyText="There are no products yet."
                renderItem={({ item }) => <ProductInfoItem product={item} />}
            />
        </section>
    );
};

export default Products;
