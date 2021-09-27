import { Provider } from 'react-redux'
import { store } from '../app/store'
import { Provider as AuthProvider } from 'next-auth/client'
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <AuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>)
}

export default MyApp
