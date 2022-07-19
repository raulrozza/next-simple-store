import styled, { css } from 'styled-components';

export const Container = styled.li`
    ${({ theme }) => css`
        display: flex;
        flex-direction: column;
        padding: ${theme.layout.spacing(2)};
        border-bottom: 1px solid ${theme.palette.gray['100']};
        gap: ${theme.layout.spacing(1)};

        .address {
            color: ${theme.palette.gray['700']};
        }

        p strong {
            color: ${theme.palette.primary['900']};
        }

        a {
            align-self: flex-start;
        }

        @media (min-width: ${theme.layout.breakpoints.md}) {
            display: grid;
            grid-template-areas: 'title button' 'address button' 'installment credit';
            grid-template-columns: 1fr ${theme.layout.size(10)};

            h4 {
                grid-area: title;
            }

            .address {
                grid-area: address;
            }

            .installment {
                grid-area: installment;
            }

            .credit {
                grid-area: credit;
                justify-self: end;
            }

            a {
                grid-area: button;
                justify-self: end;
            }
        }
    `}
`;
