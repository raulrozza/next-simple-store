import { FC } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import theme from '@/config/theme';

import { ThemeContextProvider } from '../../hooks/useTheme';
import GlobalStyles from './styles';

const StyledComponentsThemeContext: FC = ({ children }) => (
    <ThemeContextProvider.Provider
        value={{
            theme,
        }}
    >
        <SCThemeProvider theme={theme}>
            <GlobalStyles />

            {children}
        </SCThemeProvider>
    </ThemeContextProvider.Provider>
);

export default StyledComponentsThemeContext;
