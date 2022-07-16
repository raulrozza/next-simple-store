import { createContext, useContext } from 'react';

import { isEmpty } from 'lodash';

import { ITheme } from '@/config/theme';

type ThemeProvider = {
    theme: ITheme;
};

export const ThemeContextProvider = createContext<ThemeProvider>(
    {} as ThemeProvider,
);

const useTheme = (): ThemeProvider => {
    const themeProvider = useContext(ThemeContextProvider);

    if (isEmpty(themeProvider))
        throw new Error(
            'useTheme should be called inside a ThemeContextProvider',
        );

    return themeProvider;
};

export default useTheme;
