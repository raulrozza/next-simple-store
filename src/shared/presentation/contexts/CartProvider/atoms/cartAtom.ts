import { atom } from 'recoil';

import { CartEntry } from '../models';

export const cartAtom = atom<Record<string, CartEntry>>({
    default: {},
    key: 'cartAtom',
});
