import { FC } from 'react';

import { ThemeProvider } from '@/shared/presentation/contexts';

const AppContainer: FC = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
);

export default AppContainer;
