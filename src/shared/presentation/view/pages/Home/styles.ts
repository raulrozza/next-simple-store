import styled, { css } from 'styled-components';

import { MAX_SCREEN_WIDTH } from '@/shared/presentation/constants/screen';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Content = styled.main`
    ${({ theme }) => css`
        width: 100%;
        max-width: ${theme.layout.size(MAX_SCREEN_WIDTH)};
        margin: ${theme.layout.size(1)};
    `}
`;

export const Grid = styled.ul`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: ${theme.layout.spacing(1)};

        @media (min-width: ${theme.layout.breakpoints.md}) {
            grid-template-columns: repeat(3, 1fr);
            gap: ${theme.layout.spacing(2)};
        }
    `}
`;

export const GridItem = styled.li`
    ${({ theme }) => css`
        display: grid;
        grid-template-rows: auto ${theme.layout.size(3.5)} ${theme.layout.size(
                2,
            )} ${theme.layout.size(2)} ${theme.layout.size(2)};

        background-color: ${theme.palette.secondary['300']};

        overflow: hidden;
        height: ${theme.layout.size(23)};
        color: ${theme.palette.gray['0']};
        padding-bottom: ${theme.layout.spacing(2)};

        strong {
            font-family: ${theme.typography.family.title};
            margin: ${theme.layout.spacing(1, 1, 2)};
        }

        .price {
            font-size: ${theme.typography.sizes.md};
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
        margin: ${theme.layout.spacing(2)};

        label {
            font-size: ${theme.typography.sizes.xs};
        }

        input {
            display: flex;
            width: 100%;
            outline: none;
            font-size: ${theme.typography.sizes.xs};
        }
    `}
`;
