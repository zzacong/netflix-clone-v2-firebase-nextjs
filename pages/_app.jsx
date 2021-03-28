import 'normalize.css'
import Head from 'next/head'
import { GlobalStyles } from '../styles/global-styles'
import FirebaseProvider from '../context/FirebaseContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirebaseProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </FirebaseProvider>
    </>
  )
}

export default MyApp
