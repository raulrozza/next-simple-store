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
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
    },
    family: {
        text: "'Roboto', sans-serif",
        title: "'Open Sans', sans-serif",
    },
};

export default typography;
