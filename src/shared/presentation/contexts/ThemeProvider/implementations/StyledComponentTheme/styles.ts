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
        font-size: ${theme.typography.sizes.md};
        color: ${theme.palette.gray['1000']};
    }

    select {
        font-family: ${theme.typography.family.text};
        font-size: ${theme.typography.sizes.md};
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

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.3rem;
    }

    h4 {
        font-size: 1rem;
    }

    h5 {
        font-size: 0.8rem;
    }

    h6 {
        font-size: 0.7rem;
    }
`}
`;

export default global;
