import { createGlobalStyle } from 'styled-components';
import thin from '../assets/fonts/Roboto-Thin.ttf';
import regular from '../assets/fonts/Roboto-Regular.ttf';
import bold from '../assets/fonts/Roboto-Bold.ttf';
import black from '../assets/fonts/Roboto-Black.ttf';

const GlobalStyle = createGlobalStyle`
     @font-face {
        font-family: 'Roboto';
        src: url(${thin});
        font-weight: 100;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${regular});
        font-weight: 400;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${bold});
        font-weight: 700;
        font-display: swap; 
    }

    @font-face {
        font-family: 'Roboto';
        src: url(${black});
        font-weight: 900;
        font-display: swap; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%; 
    }

    body {
        font-family: ${({ theme }) => theme.text.family};
        font-size: ${({ theme }) => theme.text.size.standard};
        background-color: ${({ theme }) => theme.colors.background};
        overflow-x: hidden;
    }
    
    ul {
        list-style: none;
    }
`;

export { GlobalStyle };
