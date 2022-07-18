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

export const ListItem = styled.li`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding: ${theme.layout.spacing(2)};
        border-bottom: 1px solid ${theme.palette.gray['100']};
        gap: ${theme.layout.spacing(1)};

        .slug {
            color: ${theme.palette.gray['700']};
        }

        .price {
            color: ${theme.palette.primary['900']};
        }

        a {
            align-self: flex-start;
        }

        @media (min-width: ${theme.layout.breakpoints.md}) {
            display: grid;
            grid-template-areas: 'title button' 'description button' 'slug price';
            grid-template-columns: 1fr ${theme.layout.size(10)};

            h4 {
                grid-area: title;
            }

            .description {
                grid-area: description;
            }

            .slug {
                grid-area: slug;
            }

            .price {
                grid-area: price;
                justify-self: end;
            }

            a {
                grid-area: button;
                justify-self: end;
            }
        }
    `}
`;
