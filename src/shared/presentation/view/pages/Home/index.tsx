import { FC } from 'react';

import faker from 'faker';

import { IProduct } from '@/shared/domain/entities/Product';
import { useAddToCart } from '@/shared/presentation/contexts';
import { Spacing } from '@/shared/presentation/view/components/atoms';
import { CatalogItem } from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { useHomeController } from './hooks';
import { Container, Content, Grid } from './styles';

const Home: FC = () => {
    // const { products } = useHomeController();
    const { addToCart } = useAddToCart();

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
                            <CatalogItem
                                key={product.id}
                                product={{
                                    ...product,
                                    imgAlt: `Placeholder for ${product.slug}`,
                                }}
                                onAddToCart={addToCart}
                            />
                        ))}
                    </Grid>
                </Content>
            </Container>
        </section>
    );
};

export default Home;
