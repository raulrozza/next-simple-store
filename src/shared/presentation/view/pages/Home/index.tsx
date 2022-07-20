import { FC } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import { useAddToCart } from '@/shared/presentation/contexts';
import { Spacing } from '@/shared/presentation/view/components/atoms';
import {
    CatalogItem,
    CartHeader,
} from '@/shared/presentation/view/components/molecules';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { useHomeController } from './hooks';
import { Container, Content, Grid } from './styles';

const products: IProduct[] = Array.from({ length: 10 }, (_, index) => ({
    id: `product-${index}`,
    name: `Product N${index}`,
    description: `This is the product ${index}, a very good one`,
    price: index * 10,
    slug: `product-${index}`,
}));

const Home: FC = () => {
    // const { products } = useHomeController();
    const { addToCart } = useAddToCart();

    return (
        <section>
            <Menu activeItem="/" />

            <Container>
                <Content>
                    <CartHeader title="Catalog" />

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
