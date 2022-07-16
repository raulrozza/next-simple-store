type Space = number | string;

interface Spacing {
    (value: Space): string;
    (vertical: Space, horizontal: Space): string;
    (top: Space, horizontal: Space, bottom: Space): string;
    (top: Space, right: Space, bottom: Space, left: Space): string;
}

const valueToString = (value: Space, factor: number): string => {
    if (typeof value === 'string') return value;
    return `${value * factor}px`;
};

const spacing =
    (factor: number): Spacing =>
    (...args: Space[]) => {
        const argsToString = args.map(arg => valueToString(arg, factor));
        const spacingString = argsToString.join(' ');

        return spacingString;
    };

const layout = {
    spacing: spacing(4),
    borderRadius: {
        small: '4px',
        medium: '10px',
        large: '16px',
    },
    size: spacing(12),
};

export default layout;
