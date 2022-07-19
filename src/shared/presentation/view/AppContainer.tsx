import { FC } from 'react';

import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@/shared/presentation/contexts';

const AppContainer: FC = ({ children }) => (
    <RecoilRoot>
        <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
);

export default AppContainer;
