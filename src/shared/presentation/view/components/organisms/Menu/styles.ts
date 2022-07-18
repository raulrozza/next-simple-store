import { BiMenuAltLeft } from 'react-icons/bi';
import styled from 'styled-components';

export const DrawerMenu = styled.nav`
    @media (min-width: ${({ theme }) => theme.layout.breakpoints.md}) {
        display: none;
    }
`;

export const MenuButton = styled.button`
    padding: ${({ theme }) => theme.layout.spacing(1)};
`;

export const MenuIcon = styled(BiMenuAltLeft)`
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.palette.gray['700']};
`;

export const HorizontalMenu = styled.nav`
    display: none;
    @media (min-width: ${({ theme }) => theme.layout.breakpoints.md}) {
        display: block;
    }
`;
