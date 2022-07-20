import { FC } from 'react';

import { Check, Container, Overlay } from './styles';

type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

const Drawer: FC<DrawerProps> = ({ open, onClose, children, ...props }) => (
    <div {...props}>
        <Check
            type="checkbox"
            id="drawer-checkbox"
            onChange={onClose}
            checked={open}
        />

        <Container role="navigation" $hidden={!open}>
            {children}
        </Container>

        <Overlay
            htmlFor="drawer-checkbox"
            $hidden={!open}
            data-testid="drawer-Overlay"
        />
    </div>
);

export default Drawer;
