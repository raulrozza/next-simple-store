type FontFamilies = 'text' | 'title';

interface ISizes {
    small: string;
    medium: string;
    large: string;
}

interface ITypography {
    family: Record<FontFamilies, string>;
    sizes: ISizes;
}

const typography: ITypography = {
    sizes: {
        small: '10px',
        medium: '16px',
        large: '22px',
    },
    family: {
        text: "'Roboto', sans-serif",
        title: "'Open Sans', sans-serif",
    },
};

export default typography;
