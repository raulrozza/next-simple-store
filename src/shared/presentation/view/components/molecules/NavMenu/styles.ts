import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.ul`
    height: 100%;
    list-style: none;

    ${({ theme }) => css`
        background-color: ${theme.palette.gray['0']};

        padding: ${theme.layout.spacing(2)};
    `}
`;

export const ListItem = styled.li`
    background-color: transparent;
    border-radius: ${({ theme }) => theme.layout.borderRadius.sm};

    &:hover {
        background-color: ${({ theme }) =>
            transparentize(0.9, theme.palette.gray['100'])};
    }
`;
