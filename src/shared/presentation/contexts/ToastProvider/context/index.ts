import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import { IToastProvider } from '../models';

export const ToastProviderContext = createContext<IToastProvider>(
    {} as IToastProvider,
);

export const useToastProvider = () => {
    const provider = useContext(ToastProviderContext);

    if (isEmpty(provider))
        throw new Error(
            'useToastProvider must be used within a ToastProviderContext',
        );

    return provider;
};
