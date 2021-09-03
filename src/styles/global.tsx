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
    }
`;

export default GlobalStyle;
