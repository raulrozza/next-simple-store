import { FC } from 'react';

import Link from 'next/link';

import { IProduct } from '@/shared/domain/entities/Product';
import { Button } from '@/shared/presentation/view/components/atoms';

import { Container } from './styles';

interface ProductInfoItemProps {
    product: IProduct;
}

const ProductInfoItem: FC<ProductInfoItemProps> = ({ product }) => (
    <Container>
        <h4>{product.name}</h4>

        <p className="description">{product.description}</p>

        <p className="slug">
            Slug: <em>{product.slug}</em>
        </p>

        <strong className="price">Price: ${product.price.toFixed(2)}</strong>

        <Link href={`/products/edit/${product.id}`} passHref>
            <Button variant="secondary" icon="edit" asAnchor>
                Edit
            </Button>
        </Link>
    </Container>
);

export default ProductInfoItem;
