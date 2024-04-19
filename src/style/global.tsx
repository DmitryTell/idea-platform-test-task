import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;
