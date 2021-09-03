import Head from 'next/head';
import { useRouter } from 'next/router';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from 'react-query';

import MainLayout from '@layouts/Main';
import LoginLayout from '@layouts/Login';
import { LoginProvider } from 'src/context/LoginContext';

import GlobalStyle from '@styles/global';

const queryClient = new QueryClient();

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../mocks');
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const BuildLayout = () => {
    const route = router.pathname;

    if (route.startsWith('/login'))
      return (
        <LoginLayout>
          <Component {...pageProps} />
        </LoginLayout>
      );

    return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    );
  };

  return (
    <>
      <Head>
        <title>Nextjs template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />
      <LoginProvider>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <BuildLayout />
          </SnackbarProvider>
        </QueryClientProvider>
      </LoginProvider>
    </>
  );
}

export default MyApp;