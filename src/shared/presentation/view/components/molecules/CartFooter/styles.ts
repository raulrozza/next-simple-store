import styled, { css } from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ theme }) => css`
        color: ${theme.palette.gray['0']};

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;

            @media (min-width: ${theme.layout.breakpoints.md}) {
                flex-direction: row;
            }
        }
    `}
`;
