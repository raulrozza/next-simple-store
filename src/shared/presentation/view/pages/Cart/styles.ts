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

export const ListFooter = styled.footer`
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
