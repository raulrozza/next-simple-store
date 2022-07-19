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
