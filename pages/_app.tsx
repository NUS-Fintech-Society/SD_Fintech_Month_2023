import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NavigationBar from '../components/NavigationBar'
import { defaultColors } from '../themes/default'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    colors: {
      brand: {
        500: defaultColors.primary1
      }
    }
  })

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
  )
}

export default MyApp
