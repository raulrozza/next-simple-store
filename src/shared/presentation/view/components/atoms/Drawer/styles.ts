import styled, { css } from 'styled-components';

export const Check = styled.input`
    display: none;
`;

interface HiddenProps {
    $hidden: boolean;
}

export const Container = styled.nav<HiddenProps>`
    position: fixed;
    visibility: hidden;
    background: white;
    transition: all;
    box-shadow: 0 0 10px 5px #00000029;
    z-index: 101;
    transition-duration: 500ms;
    top: 0;
    left: 0;
    transform: translate3d(-100%, 0, 0);
    width: 200px;
    height: 100vh;

    ${({ $hidden }) =>
        !$hidden &&
        css`
            visibility: visible;
            transform: translate3d(0, 0, 0) !important;
        `}
`;

export const Overlay = styled.label<HiddenProps>`
    display: none;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #000;
    opacity: 0.4;
    z-index: 100;

    ${({ $hidden }) =>
        !$hidden &&
        css`
            display: block;
        `}
`;
