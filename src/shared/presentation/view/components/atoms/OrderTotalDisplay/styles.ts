import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

interface TotalTextProps {
    isValidTotal: boolean;
}

export const TotalText = styled.p<TotalTextProps>`
    ${({ theme, isValidTotal }) => css`
        font-size: ${theme.typography.sizes.lg};

        ${!isValidTotal &&
        css`
            color: ${theme.palette.error['500']};
        `}
    `}
`;
