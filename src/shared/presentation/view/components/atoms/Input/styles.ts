import styled, { css } from 'styled-components';

interface InputProps {
    hasErrors?: boolean;
}

export const StyledInput = styled.input<InputProps>`
    ${({ theme, hasErrors }) => css`
        background-color: ${theme.palette.gray['0']};
        border: 2px solid transparent;
        outline: none;
        border-radius: ${theme.layout.borderRadius.sm};

        width: 100%;
        padding: ${theme.layout.spacing(2)};
        transition: outline 0.2s, border 0.2s;

        &:focus {
            border-color: ${theme.palette.primary['400']};
        }

        ${hasErrors &&
        css`
            border-color: ${theme.palette.error['400']};

            &:focus {
                border-color: ${theme.palette.error['200']};
            }
        `}
    `}
`;

export const ErrorContainer = styled.span`
    ${({ theme }) => css`
        color: ${theme.palette.error['400']};
        font-size: ${theme.typography.sizes.sm};
        padding: ${theme.layout.spacing(1, 1, 0, 1)};
    `}
`;
