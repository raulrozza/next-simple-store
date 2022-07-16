import 'styled-components';

import { ITheme } from '@/config/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}
