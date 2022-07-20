import { useCallback } from 'react';

import { useSetRecoilState } from 'recoil';

import { cartAtom } from '../atoms/cartAtom';

export default function useCartManager() {
    const setCart = useSetRecoilState(cartAtom);

    const clear = useCallback(() => {
        setCart({});
    }, [setCart]);

    return { clear };
}
