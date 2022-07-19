import styled, { css } from 'styled-components';

import { MAX_SCREEN_WIDTH } from '@/shared/presentation/constants/screen';
import { Card } from '@/shared/presentation/view/components/atoms';

export const Container = styled.section`
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

export const ButtonPanel = styled.div`
    display: flex;
`;

export const List = styled(Card)`
    overflow: hidden;
`;
