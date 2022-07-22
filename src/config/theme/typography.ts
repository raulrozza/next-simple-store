type FontFamilies = 'text' | 'title';

interface ISizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

interface ITypography {
    family: Record<FontFamilies, string>;
    sizes: ISizes;
}

const typography: ITypography = {
    sizes: {
        xs: '0.5rem',
        sm: '0.7rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
    },
    family: {
        text: "'Roboto', sans-serif",
        title: "'Open Sans', sans-serif",
    },
};

export default typography;
