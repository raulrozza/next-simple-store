import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        padding: ${theme.layout.spacing(3)};

        display: grid;
        grid-template-areas: 'title price' 'list list';
        grid-template-columns: 1fr ${theme.layout.size(5)};
        gap: ${theme.layout.spacing(2)};

        h2 {
            grid-area: title;
            color: ${theme.palette.primary['1000']};
        }

        > span {
            grid-area: price;
            align-self: center;
        }

        ul {
            grid-area: list;
        }
    `}
`;

export const List = styled.ul`
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: ${({ theme }) => theme.layout.size(15)};

        span + span {
            color: ${({ theme }) => theme.palette.primary['800']};
        }
    }
`;
