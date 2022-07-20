import styled, { css } from 'styled-components';

export const Item = styled.li`
    ${({ theme }) => css`
        background-color: ${theme.palette.gray['0']};
        border-radius: ${theme.layout.borderRadius.md};
        padding: ${theme.layout.spacing(2)};

        display: grid;
        grid-template-areas: 'name price button' 'quantity price button';
        grid-template-columns: 4fr 1fr ${theme.layout.size(3)};
        gap: ${theme.layout.spacing(1)};
        align-items: center;

        .name {
            grid-area: name;
        }

        .quantity {
            grid-area: quantity;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: ${theme.typography.sizes.xs};

            input {
                outline: none;
                font-size: ${theme.typography.sizes.xs};
                max-width: ${theme.layout.size(4)};
            }
        }

        .price {
            grid-area: price;
            color: ${theme.palette.primary['1000']};
            justify-self: end;
        }

        button {
            grid-area: button;
            justify-self: end;
        }

        @media (min-width: ${theme.layout.breakpoints.md}) {
            grid-template-areas: 'name quantity price button';
            grid-template-columns: 4fr 1fr 1fr ${theme.layout.size(3)};
        }
    `}
`;
