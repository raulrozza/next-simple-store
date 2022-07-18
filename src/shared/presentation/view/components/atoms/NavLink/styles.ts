import styled, { css } from 'styled-components';

interface AnchorProps {
    active: boolean;
}

export const Anchor = styled.a<AnchorProps>`
    display: flex;
    align-items: center;
    width: 100%;

    ${({ theme, active }) => css`
        gap: ${theme.layout.spacing(1)};
        padding: ${theme.layout.spacing(1, 0.5)};
        color: ${theme.palette.gray['700']};
        text-decoration: none;
        font-size: ${theme.typography.sizes.md};
        font-family: ${theme.typography.family.title};

        &:hover {
            color: ${theme.palette.gray['800']};
        }

        ${active &&
        css`
            color: ${theme.palette.primary['900']};
        `}
    `}
`;
