import { createGlobalStyle, css } from 'styled-components';

const global = createGlobalStyle`
${({ theme }) => css`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body,
    html,
    #root {
        height: 100%;
    }

    body,
    input,
    textarea,
    a,
    button {
        font-family: ${theme.typography.family.text};
        font-size: ${theme.typography.sizes.sm};
        color: ${theme.palette.gray['1000']};
    }

    body {
        background-color: ${theme.palette.gray['100']};
        min-height: 100vh;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${theme.typography.family.title};
    }
`}
`;

export default global;
