import { useCallback } from 'react';

import { useSetRecoilState } from 'recoil';

import { cartAtom } from '../atoms/cartAtom';
import { CartEntry } from '../models';

export default function useAddToCart() {
    const setCartItems = useSetRecoilState(cartAtom);

    const addToCart = useCallback(
        (entry: CartEntry) =>
            setCartItems(items => {
                const key = entry.product.id;

                const cart = { ...items };

                if (!cart[key]) cart[key] = entry;
                else cart[key].quantity += entry.quantity;

                return cart;
            }),
        [setCartItems],
    );

    return { addToCart };
}
