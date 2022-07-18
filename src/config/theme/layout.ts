type Space = number | string;

interface Spacing {
    (value: Space): string;
    (vertical: Space, horizontal: Space): string;
    (top: Space, horizontal: Space, bottom: Space): string;
    (top: Space, right: Space, bottom: Space, left: Space): string;
}

const valueToString = (value: Space, factor: number): string => {
    if (typeof value === 'string') return value;
    return `${value * factor}rem`;
};

const spacing =
    (factor: number): Spacing =>
    (...args: Space[]) => {
        const argsToString = args.map(arg => valueToString(arg, factor));
        const spacingString = argsToString.join(' ');

        return spacingString;
    };

const layout = {
    spacing: spacing(0.25),
    size: spacing(1),
    borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        xl: '2rem',
    },
    breakpoints: {
        md: '768px',
    },
};

export default layout;
