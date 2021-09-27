import Router from 'next/router';
import { Provider } from 'react-redux'
import { store } from '../app/store'
import { Provider as AuthProvider } from 'next-auth/client'
import NProgress from "nprogress";
import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {

  Router.onRouteChangeStart = url => {
    NProgress.configure({ showSpinner: false }).start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()

  return (
    <>
      <Head>
        <title>Amazon 2.0</title>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
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
