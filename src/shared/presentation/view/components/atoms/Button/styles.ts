import styled, { css } from 'styled-components';

interface StyledButtonProps {
    variant?: 'primary' | 'secondary';
}

const VARIANT_STYLES = {
    primary: css`
        ${({ theme }) => css`
            background-color: ${theme.palette.primary['700']};
            color: ${theme.palette.gray['0']};

            &:hover {
                background-color: ${theme.palette.primary['600']};
            }
        `}
    `,
    secondary: css`
        ${({ theme }) => css`
            background-color: ${theme.palette.secondary['700']};
            color: ${theme.palette.gray['0']};

            &:hover {
                background-color: ${theme.palette.secondary['600']};
            }
        `}
    `,
    default: css`
        ${({ theme }) => css`
            color: ${theme.palette.gray['900']};

            &:hover {
                background-color: ${theme.palette.gray['200']};
            }
        `}
    `,
};

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ theme, variant }) => css`
        padding: ${theme.layout.spacing(2)};
        border-radius: ${theme.layout.borderRadius.md};
        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: ${theme.layout.spacing(1)};

        ${VARIANT_STYLES[variant || 'default']}
    `}
`;
