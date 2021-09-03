import Head from 'next/head';
import { useRouter } from 'next/router';
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
        <title>PEG Contas</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <GlobalStyle />
      <LoginProvider>
        <QueryClientProvider client={queryClient}>
          <BuildLayout />
        </QueryClientProvider>
      </LoginProvider>
    </>
  );
}

export default MyApp;
