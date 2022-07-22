import { FC } from 'react';

import { RecoilRoot } from 'recoil';

import { ThemeProvider, ToastProvider } from '@/shared/presentation/contexts';

const AppContainer: FC = ({ children }) => (
    <RecoilRoot>
        <ToastProvider>
            <ThemeProvider>{children}</ThemeProvider>
        </ToastProvider>
    </RecoilRoot>
);

export default AppContainer;
