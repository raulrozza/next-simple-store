import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
    ${({ theme }) => css`
        background-color: ${theme.palette.gray['0']};
        border: 2px solid ${theme.palette.gray['100']};
        outline: none;
        border-radius: ${theme.layout.borderRadius.sm};

        width: 100%;
        padding: ${theme.layout.spacing(2)};
        transition: outline 0.2s, border 0.2s;

        &:focus {
            border-color: ${theme.palette.primary['400']};
        }
    `}
`;
