import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        font-family: TitilliumWeb;
        font-size: 14px;
    }
    p, span{
        color: #1f274c;
    }
    h1{
        color: #1f274c;
        font-size: 30px;
    }

`;

export default GlobalStyle;
