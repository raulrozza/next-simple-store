import { selector } from 'recoil';

import { cartAtom } from './cartAtom';

export const cartMetaSelector = selector({
    key: 'cartMetaSelector',
    get: ({ get }) => {
        const cart = get(cartAtom);
        const cartItems = Object.values(cart);

        return {
            total: cartItems.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0,
            ),
            quantity: cartItems.length,
        };
    },
});
