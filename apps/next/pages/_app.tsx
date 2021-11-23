import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from '@futbol-pro/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fútbol Pro</title>
      </Head>
      <div className="app">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
