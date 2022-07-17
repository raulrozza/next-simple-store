interface PaletteOptions {
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

type PaletteKeys = 'primary' | 'secondary' | 'error' | 'gray';

type Palette = Record<PaletteKeys, PaletteOptions>;

export const palette: Palette = {
    primary: {
        0: '#e6fbff',
        100: '#B3F3FE',
        200: '#A6E7F3',
        300: '#99DBE8',
        400: '#8CCFDE',
        500: '#7FC3D3',
        600: '#71B7C8',
        700: '#579FB3',
        800: '#4A93A8',
        900: '#3D879D',
        1000: '#244f5c',
    },
    secondary: {
        0: '#ECD5DB',
        100: '#D29DAC',
        200: '#C28F9E',
        300: '#B3818F',
        400: '#A37381',
        500: '#946573',
        600: '#845864',
        700: '#754A56',
        800: '#653C48',
        900: '#562E39',
        1000: '#46202B',
    },
    error: {
        0: '#FFDED6',
        100: '#FFAC99',
        200: '#F39C88',
        300: '#E68C77',
        400: '#DA7B66',
        500: '#CD6B55',
        600: '#C15B44',
        700: '#B44B33',
        800: '#A83A22',
        900: '#9B2A11',
        1000: '#8F1A00',
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
