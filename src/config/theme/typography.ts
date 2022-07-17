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
        xs: '0.75rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '4rem',
    },
    family: {
        text: "'Roboto', sans-serif",
        title: "'Open Sans', sans-serif",
    },
};

export default typography;
