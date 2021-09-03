import { addDecorator } from "@storybook/react";
import GlobalStyle from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import { SnackbarProvider } from 'notistack';


addDecorator(mswDecorator);

addDecorator((story) => (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      {story()}
    </SnackbarProvider>
  </ThemeProvider>
));

import handlers from '../src/mocks/handlers';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: [...handlers]
}


initializeWorker();
