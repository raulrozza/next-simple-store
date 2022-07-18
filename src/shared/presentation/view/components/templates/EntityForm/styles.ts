import styled, { css } from 'styled-components';

import { MAX_SCREEN_WIDTH } from '@/shared/presentation/constants/screen';
import { Card } from '@/shared/presentation/view/components/atoms';

export const Container = styled.section`
    display: flex;
    justify-content: center;
`;

export const Content = styled(Card)`
    ${({ theme }) => css`
        padding: ${theme.layout.spacing(4)};
        margin: ${theme.layout.spacing(1)};

        width: 100%;
        max-width: ${theme.layout.size(MAX_SCREEN_WIDTH)};
    `}
`;
