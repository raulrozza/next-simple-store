import styled, { css } from 'styled-components';

interface TextAreaProps {
    hasErrors?: boolean;
}

export const StyledTextArea = styled.textarea<TextAreaProps>`
    ${({ theme, hasErrors }) => css`
        background-color: ${theme.palette.gray['0']};
        border: 2px solid ${theme.palette.gray['100']};
        outline: none;
        border-radius: ${theme.layout.borderRadius.sm};

        width: 100%;
        height: ${theme.layout.size(6)};
        padding: ${theme.layout.spacing(2)};
        transition: outline 0.2s, border 0.2s;

        resize: none;

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
