import { useRecoilValue } from 'recoil';

import { cartMetaSelector } from '../atoms/cartMeta';

export default function useCartMetaValue() {
    return useRecoilValue(cartMetaSelector);
}
