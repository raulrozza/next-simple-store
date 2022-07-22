import styled, { css } from 'styled-components';

export const Item = styled.li`
    ${({ theme }) => css`
        display: grid;
        grid-template-rows: auto ${theme.layout.size(3.5)} ${theme.layout.size(
                2,
            )} ${theme.layout.size(2)} ${theme.layout.size(2)};

        background-color: ${theme.palette.secondary['300']};

        overflow: hidden;
        height: ${theme.layout.size(23)};
        color: ${theme.palette.gray['0']};
        padding-bottom: ${theme.layout.spacing(1)};

        strong {
            font-family: ${theme.typography.family.title};
            font-size: ${theme.typography.sizes.lg};
            margin: ${theme.layout.spacing(1)};
        }

        .price {
            margin: ${theme.layout.spacing(0, 1)};
        }

        button {
            justify-self: center;
        }
    `}
`;

export const QuantityRow = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.layout.spacing(1)};
        margin: ${theme.layout.spacing(1)};

        label {
            font-size: ${theme.typography.sizes.sm};
        }

        input {
            display: flex;
            width: 100%;
            outline: none;
            font-size: ${theme.typography.sizes.sm};
        }
    `}
`;
