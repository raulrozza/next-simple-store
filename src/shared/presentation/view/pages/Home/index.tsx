import { FC } from 'react';

import { useAddToCart } from '@/shared/presentation/contexts';
import { Spacing } from '@/shared/presentation/view/components/atoms';
import {
    CatalogItem,
    CartHeader,
} from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { useHomeController } from './hooks';
import { Container, Content, Grid } from './styles';

const Home: FC = () => {
    const { products } = useHomeController();
    const { addToCart } = useAddToCart();

    return (
        <section>
            <Menu activeItem="/" />

            <Container>
                <Content>
                    <CartHeader title="Catalog" />

                    <Spacing size={4} />

                    {!products.length && <p>There are no products yet.</p>}

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
