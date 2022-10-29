import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NavigationBar from '../components/NavigationBar';
import { defaultColors, defaultFont } from '../themes/default';
import Footer from '../components/Footer';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: `'${defaultFont}', sans-serif`,
      body: `'${defaultFont}', sans-serif`,
    },
    colors: {
      brand: {
        500: defaultColors.primary1,
        primary: defaultColors.primary1,
        secondary: defaultColors.secondary1,
        tertiary: defaultColors.tertiary1,
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>NUS Fintech Month 2023</title>
        <meta name="description" content="NUS Fintech Month 2023" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
