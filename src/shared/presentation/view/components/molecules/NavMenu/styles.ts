import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
    direction: 'row' | 'column';
}

const DIRECTION_STYLES = {
    row: css`
        flex-direction: row;
        justify-content: center;
        width: 100%;
        ${({ theme }) => css`
            gap: ${theme.layout.spacing(4)};
        `}
    `,
    column: css`
        flex-direction: column;
        height: 100%;
        ${({ theme }) => css`
            background-color: ${theme.palette.gray['0']};
        `}
    `,
};

export const Container = styled.ul<ContainerProps>`
    display: flex;
    list-style: none;

    ${({ direction }) => DIRECTION_STYLES[direction]}

    ${({ theme }) => css`
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
