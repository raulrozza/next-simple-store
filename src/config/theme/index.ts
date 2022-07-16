import layout from './layout';
import { lightPalette } from './palette';
import typography from './typography';

export interface ITheme {
    layout: typeof layout;
    palette: typeof lightPalette;
    typography: typeof typography;
}

const theme: ITheme = {
    layout,
    palette: lightPalette,
    typography,
};

export default theme;
