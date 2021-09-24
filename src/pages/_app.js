import { Provider } from 'react-redux'
import { store } from '../app/store'
import Head from 'next/head'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>)
}

export default MyApp
