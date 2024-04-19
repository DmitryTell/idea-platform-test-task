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

    @-webkit-keyframes skeleton-animation {
      0% {
        background: #555555;
      }
      100% {
        background: #a8a8a8;
      }
    }
    
    @keyframes skeleton-animation {
      0% {
        background: #555555;
      }
      100% {
        background: #a8a8a8;
      }
    }
`;
