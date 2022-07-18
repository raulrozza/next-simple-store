import { FC } from 'react';

import Link from 'next/link';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaListAlt } from 'react-icons/fa';

import { Anchor } from './styles';

const ICONS = {
    home: AiFillHome,
    list: FaListAlt,
    people: BsFillPeopleFill,
    shopping: AiFillShopping,
};

interface NavLinkProps {
    href: string;
    icon: keyof typeof ICONS;
    active: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, active, children }) => {
    const Icon = ICONS[icon];

    return (
        <Link href={href} passHref>
            <Anchor aria-selected={active} active={active}>
                <Icon aria-label={`${icon} icon`} />

                {children}
            </Anchor>
        </Link>
    );
};

export default NavLink;
