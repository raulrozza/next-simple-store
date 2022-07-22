import styled, { css } from 'styled-components';

interface StyledButtonProps {
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

const VARIANT_STYLES = {
    primary: css<StyledButtonProps>`
        ${({ theme, disabled }) => css`
            background-color: ${theme.palette.primary['700']};
            color: ${theme.palette.gray['0']};

            ${disabled
                ? css`
                      opacity: 0.5;
                      cursor: default;
                  `
                : css`
                      &:hover {
                          background-color: ${theme.palette.primary['600']};
                      }
                  `}
        `}
    `,
    secondary: css<StyledButtonProps>`
        ${({ theme, disabled }) => css`
            background-color: ${theme.palette.secondary['700']};
            color: ${theme.palette.gray['0']};

            ${disabled
                ? css`
                      opacity: 0.5;
                      cursor: default;
                  `
                : css`
                      &:hover {
                          background-color: ${theme.palette.secondary['600']};
                      }
                  `}
        `}
    `,
    default: css<StyledButtonProps>`
        ${({ theme, disabled }) => css`
            color: ${theme.palette.gray['900']};

            ${disabled
                ? css`
                      opacity: 0.5;
                      cursor: default;
                  `
                : css`
                      &:hover {
                          background-color: ${theme.palette.gray['200']};
                      }
                  `}
        `}
    `,
};

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ theme, variant }) => css`
        padding: ${theme.layout.spacing(2, 4)};
        border-radius: ${theme.layout.borderRadius.md};
        transition: background-color 0.2s;

        display: flex;
        align-items: center;
        gap: ${theme.layout.spacing(1)};

        ${VARIANT_STYLES[variant || 'default']}
    `}
`;
