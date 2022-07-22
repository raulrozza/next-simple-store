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

export const FinishOrderContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        background-color: ${theme.palette.gray['0']};
        border-radius: ${theme.layout.borderRadius.md};
        padding: ${theme.layout.spacing(8, 2)};
        gap: ${theme.layout.spacing(4)};
        flex-direction: column;

        div {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
        }

        @media (min-width: ${theme.layout.breakpoints.md}) {
            flex-direction: row;
        }
    `}
`;
