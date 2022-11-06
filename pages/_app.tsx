import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import NavigationBar from '../components/NavigationBar';
import { defaultColors, defaultFont } from '../themes/default';
import Footer from '../components/Footer';
import Head from 'next/head';
import { accordionTheme } from '../styles/Accordion';

function MyApp({ Component, pageProps }: AppProps) {
  const t = defaultColors.tertiary1;

  const theme = extendTheme({
    fonts: {
      heading: `'${defaultFont}', sans-serif`,
      body: `'${defaultFont}', sans-serif`,
    },
    colors: {
      brand: {
        500: defaultColors.primary1.hexCode,
        primary: defaultColors.primary1.hexCode,
        secondary: defaultColors.secondary1.hexCode,
        tertiary: t.hexCode,
      },
    },
    components: { Accordion: accordionTheme },
    shadows: {
      tertiary: `0 6px 9px -3px rgba(${t.r}, ${t.g}, ${t.b}, 0.6), 0 4px 6px -2px rgba(${t.r}, ${t.g}, ${t.b}, 0.1)`,
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
