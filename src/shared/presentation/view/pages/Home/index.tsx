import { FC } from 'react';

import faker from 'faker';
import Image from 'next/image';

import IMG_PLACEHOLDER from '@/assets/img/product.jpg';
import { IProduct } from '@/shared/domain/entities/Product';
import { Button, Spacing } from '@/shared/presentation/view/components/atoms';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { useHomeController } from './hooks';
import { QuantityRow, Container, Content, Grid, GridItem } from './styles';

const Home: FC = () => {
    // const { products } = useHomeController();
    const products: IProduct[] = Array.from({ length: 10 }, () => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: faker.datatype.number(),
        slug: faker.commerce.productName(),
    }));

    return (
        <section>
            <Menu activeItem="/" />

            <Container>
                <Content>
                    <h1>Catalog</h1>

                    <Spacing size={4} />

                    {!products.length && <h3>There are no products yet.</h3>}

                    <Grid>
                        {products.map(product => (
                            <GridItem key={product.id}>
                                <Image
                                    src={IMG_PLACEHOLDER}
                                    alt={`Placeholder for ${product.slug}`}
                                    layout="responsive"
                                />

                                <strong>{product.name}</strong>

                                <p className="price">
                                    ${product.price.toFixed(2)}
                                </p>

                                <QuantityRow>
                                    <label htmlFor={`quantity-${product.id}`}>
                                        Quantity
                                    </label>
                                    <input
                                        id={`quantity-${product.id}`}
                                        type="number"
                                    />
                                </QuantityRow>

                                <Button variant="secondary" icon="cart">
                                    Add to cart
                                </Button>
                            </GridItem>
                        ))}
                    </Grid>
                </Content>
            </Container>
        </section>
    );
};

export default Home;
