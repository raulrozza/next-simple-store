import { useCallback } from 'react';

import { useSetRecoilState } from 'recoil';

import { cartAtom } from '../atoms/cartAtom';

export default function useCartEntryManager(key: string) {
    const setCart = useSetRecoilState(cartAtom);

    const editQuantity = useCallback(
        (quantity: number) => {
            setCart(cart => {
                const entry = cart[key];

                if (!entry) return cart;

                const newEntry = {
                    ...entry,
                    quantity,
                };

                return { ...cart, [key]: newEntry };
            });
        },
        [key, setCart],
    );

    const remove = useCallback(() => {
        setCart(cart => {
            const newCart = { ...cart };

            delete newCart[key];

            return newCart;
        });
    }, [key, setCart]);

    return {
        editQuantity,
        remove,
    };
}
