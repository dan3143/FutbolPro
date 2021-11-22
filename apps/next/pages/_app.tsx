import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fútbol Pro</title>
      </Head>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
