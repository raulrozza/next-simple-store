import { FC } from 'react';

import Link from 'next/link';

import { IProduct } from '@/shared/domain/entities/Product';
import { Button, Spacing } from '@/shared/presentation/view/components/atoms';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { ButtonPanel, Container, Content, List, ListItem } from './styles';

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
                            <ListItem key={product.id}>
                                <h4>{product.name}</h4>
                                <p className="description">
                                    {product.description}
                                </p>
                                <p className="slug">
                                    Slug: <em>{product.slug}</em>
                                </p>
                                <strong className="price">
                                    Price: ${product.price}
                                </strong>
                                <Link
                                    href={`/products/edit/${product.id}`}
                                    passHref
                                >
                                    <Button
                                        variant="secondary"
                                        icon="edit"
                                        asAnchor
                                    >
                                        Edit
                                    </Button>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        </section>
    );
};

export default Products;
