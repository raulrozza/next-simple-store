import { FC } from 'react';

import Link from 'next/link';

import { IProduct } from '@/shared/domain/entities/Product';
import { Button, Spacing } from '@/shared/presentation/view/components/atoms';
import { ProductInfoItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { ButtonPanel, Container, Content, List } from './styles';

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

            <Container>
                <Content>
                    <ButtonPanel>
                        <Link href="/products/new" passHref>
                            <Button icon="plus" variant="primary" asAnchor>
                                Add Product
                            </Button>
                        </Link>
                    </ButtonPanel>

                    <Spacing size={2} />

                    <h1>Products</h1>

                    <Spacing size={1} />

                    <List as="ul">
                        {products.map(product => (
                            <ProductInfoItem
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </List>
                </Content>
            </Container>
        </section>
    );
};

export default Products;
