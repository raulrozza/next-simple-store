import layout from './layout';
import { palette } from './palette';
import typography from './typography';

export interface ITheme {
    layout: typeof layout;
    palette: typeof palette;
    typography: typeof typography;
}

const theme: ITheme = {
    layout,
    palette,
    typography,
};

export default theme;
