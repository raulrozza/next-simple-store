import { BiMenuAltLeft } from 'react-icons/bi';
import styled from 'styled-components';

export const MenuIcon = styled(BiMenuAltLeft)`
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    color: ${({ theme }) => theme.palette.gray['700']};
`;

export const MenuButton = styled.button`
    padding: ${({ theme }) => theme.layout.spacing(1)};
`;
