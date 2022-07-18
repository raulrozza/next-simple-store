import styled, { css } from 'styled-components';

const Card = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.palette.gray['0']};
        border-radius: ${theme.layout.borderRadius.lg};
    `}
`;

export default Card;
