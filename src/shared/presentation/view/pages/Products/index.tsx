import { FC } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import { ProductInfoItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';
import { EntityManagerList } from '@/shared/presentation/view/components/templates';

const Products: FC = () => {
    const products: IProduct[] = [
        {
            id: 'dshf9sdghsd',
            name: 'Product 1',
            description: 'Description 1 of the initial product named 1',
            price: 100.99,
            slug: 'product-1',
        },
        {
            id: 'dshf9gfgfdgdhsd',
            name: 'Product 2',
            description: 'Description 2 of the initial product named 2',
            price: 200.99,
            slug: 'product-2',
        },
    ];

    return (
        <section>
            <Menu activeItem="/products" />

            <EntityManagerList
                addButton={{
                    href: '/products/new',
                    text: 'Add Product',
                }}
                title="Products"
                items={products}
                emptyText="There are no products yet."
                renderItem={({ item }) => <ProductInfoItem product={item} />}
            />
        </section>
    );
};

export default Products;
