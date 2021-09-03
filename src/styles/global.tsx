import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'TitilliumWeb';
     src: url('/assets/fonts/TitilliumWeb-Regular.ttf');
    }
    @font-face {
    font-family: 'TitilliumWeb';
     src: url('/assets/fonts/TitilliumWeb-Bold.ttf');
     font-weight: bold;
    }
    @font-face {
    font-family: 'TitilliumWeb';
     src: url('/assets/fonts/TitilliumWeb-Light.ttf');
     font-weight: lighter;
    }
    *{
        font-family: TitilliumWeb;
        font-size: 14px;
    }
    h1{
        font-size: 30px;
    }
    body{
        margin:0;
        padding:0;
    }
`;

export default GlobalStyle;
