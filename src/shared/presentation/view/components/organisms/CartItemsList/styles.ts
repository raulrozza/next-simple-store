import styled, { css } from 'styled-components';

export const List = styled.ul`
    ${({ theme }) => css`
        background-color: ${theme.palette.secondary['600']};
        padding: ${theme.layout.spacing(2)};
        border-radius: ${theme.layout.borderRadius.md};

        display: flex;
        flex-direction: column;
        gap: ${theme.layout.spacing(2)};
    `}
`;
