import styled, { css } from 'styled-components';

interface SpacingProps {
    size: number;
}

const Spacing = styled.div<SpacingProps>`
    ${({ theme, size }) => css`
        margin-top: ${theme.layout.spacing(size)};
    `}
`;

export default Spacing;
