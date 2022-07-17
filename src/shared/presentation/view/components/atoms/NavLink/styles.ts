import styled, { css } from 'styled-components';

export const Anchor = styled.a`
    display: flex;
    align-items: center;
    width: 100%;

    ${({ theme }) => css`
        gap: ${theme.layout.spacing(1)};
        padding: ${theme.layout.spacing(1, 0.5)};
        color: ${theme.palette.gray['0']};
        text-decoration: none;
        font-size: ${theme.typography.sizes.md};
        font-family: ${theme.typography.family.title};

        &:hover {
            color: ${theme.palette.primary['0']};
        }
    `}
`;
