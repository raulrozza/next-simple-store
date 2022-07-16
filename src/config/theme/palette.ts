interface PaletteOptions {
    light: string;
    main: string;
    dark: string;
}

type PaletteKeys = 'primary' | 'secondary' | 'error';

interface ContrastPallete {
    light: string;
    dark: string;
}

type ContrastPalleteKeys = 'contrast';

interface ScalePallete {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
}

type ScalePalleteKeys = 'gray';

type Palette = Record<PaletteKeys, PaletteOptions> &
    Record<ContrastPalleteKeys, ContrastPallete> &
    Record<ScalePalleteKeys, ScalePallete>;

export const lightPalette: Palette = {
    primary: {
        light: '#f68c6f',
        main: '#d83a0e',
        dark: '#782008',
    },
    secondary: {
        light: '#f7df88',
        main: '#f2cb40',
        dark: '#d7ab0f',
    },
    error: {
        light: '#fe6776',
        main: '#C20114',
        dark: '#65010b',
    },
    contrast: {
        light: '#E6EAEA',
        dark: '#031717',
    },
    gray: {
        0: '#FFFFFF',
        100: '#E6EAEA',
        200: '#CDD5D5',
        300: '#B4C0C0',
        400: '#9BABAB',
        500: '#829697',
        600: '#698182',
        700: '#506C6D',
        800: '#375758',
        900: '#1E4243',
        1000: '#052D2E',
    },
};

export const darkPalette: Palette = {
    primary: {
        light: '#d1977b',
        main: '#BE6E46',
        dark: '#844b2e',
    },
    secondary: {
        light: '#a873f2',
        main: '#8338EC',
        dark: '#420d8c',
    },
    error: {
        light: '#f47180',
        main: '#ef233c',
        dark: '#8e0b1a',
    },
    contrast: {
        light: '#efeef6',
        dark: '#0A0911',
    },
    gray: {
        0: '#0A0911',
        100: '#1C1B25',
        200: '#2E2D3A',
        300: '#413F4E',
        400: '#535162',
        500: '#656377',
        600: '#77748B',
        700: '#89869F',
        800: '#9C98B3',
        900: '#AEAAC8',
        1000: '#C0BCDC',
    },
};
