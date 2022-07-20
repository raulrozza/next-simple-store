import { FC } from 'react';

import { FaTrash } from 'react-icons/fa';

import { IProduct } from '@/shared/domain/entities/Product';
import { useCartEntryManager } from '@/shared/presentation/contexts';

import { Item } from './styles';

interface CartListItemProps {
    product: IProduct;
    quantity: number;
}

const isQuantityValid = (quantity: number) => {
    return !isNaN(quantity) && quantity > 0;
};

const CartListItem: FC<CartListItemProps> = ({ product, quantity }) => {
    const { editQuantity, remove } = useCartEntryManager(product.id);

    return (
        <Item>
            <p className="name">{product.name}</p>

            <div className="quantity">
                <label>Quantity</label>

                <input
                    type="number"
                    value={quantity}
                    onChange={event => {
                        const value = event.target.value;

                        const quantity = Number(value);

                        if (!isQuantityValid(quantity)) return;

                        editQuantity(quantity);
                    }}
                    data-testid="cartListItem-input"
                />
            </div>

            <p className="price">${(product.price * quantity).toFixed(2)}</p>

            <button onClick={remove}>
                <FaTrash />
            </button>
        </Item>
    );
};

export default CartListItem;
