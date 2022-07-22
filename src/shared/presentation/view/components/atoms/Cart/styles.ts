import { HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card';
import styled, { css } from 'styled-components';

export const Trigger = styled(HoverCardTrigger)`
    ${({ theme }) => css`
        background-color: ${theme.palette.primary['800']};
        color: ${theme.palette.gray['0']};
        border-radius: 50%;
        position: relative;

        width: ${theme.layout.size(3)};
        height: ${theme.layout.size(3)};

        display: flex;
        justify-content: center;
        align-items: center;

        strong {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: -${theme.layout.spacing(1)};
            top: -${theme.layout.spacing(1)};

            background-color: ${theme.palette.secondary['800']};
            padding: ${theme.layout.spacing(1)};
            width: ${theme.layout.size(1.5)};
            height: ${theme.layout.size(1.5)};

            border-radius: 50%;
            font-size: ${theme.typography.sizes.sm};
        }
    `}
`;

export const Content = styled(HoverCardContent)`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${theme.layout.spacing(1)};

        background-color: ${theme.palette.gray['0']};
        border: 1px solid ${theme.palette.secondary['600']};
        border-radius: ${theme.layout.borderRadius.sm};
        box-shadow: 0 0 10px 3px #00000029;

        padding: ${theme.layout.spacing(2)};

        font-size: ${theme.typography.sizes.sm};

        strong {
            color: ${theme.palette.primary['1000']};
        }

        a {
            color: ${theme.palette.secondary['1000']};
            font-size: ${theme.typography.sizes.sm};

            &:hover {
                text-decoration: underline;
                color: ${theme.palette.secondary['800']};
            }
        }
    `}
`;
