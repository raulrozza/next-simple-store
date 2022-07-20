import { FC, useCallback, useRef } from 'react';

import Image from 'next/image';

import IMG_PLACEHOLDER from '@/assets/img/product.jpg';
import { IProduct } from '@/shared/domain/entities/Product';
import { Button } from '@/shared/presentation/view/components/atoms';

import { Item, QuantityRow } from './styles';

const isQuantityValid = (quantity: number) => {
    return !isNaN(quantity) && quantity > 0;
};

const DEFAULT_QUANTITY = '1';

interface CatalogItemProps {
    product: IProduct & { imgAlt: string };
    onAddToCart: (params: { product: IProduct; quantity: number }) => void;
}

const CatalogItem: FC<CatalogItemProps> = ({ product, onAddToCart }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddToCart = useCallback(() => {
        if (!inputRef.current) return;

        const quantity = Number(inputRef.current.value.trim());

        if (!isQuantityValid(quantity)) return;

        onAddToCart({ product, quantity });
        inputRef.current.value = DEFAULT_QUANTITY;
    }, [onAddToCart, product]);

    return (
        <Item key={product.id}>
            <Image
                src={IMG_PLACEHOLDER}
                alt={product.imgAlt}
                layout="responsive"
            />

            <strong>{product.name}</strong>

            <p className="price">${product.price.toFixed(2)}</p>

            <QuantityRow>
                <label htmlFor={`quantity-${product.id}`}>Quantity</label>
                <input
                    id={`quantity-${product.id}`}
                    type="number"
                    ref={inputRef}
                    defaultValue={DEFAULT_QUANTITY}
                />
            </QuantityRow>

            <Button variant="secondary" icon="cart" onClick={handleAddToCart}>
                Add to cart
            </Button>
        </Item>
    );
};

export default CatalogItem;
