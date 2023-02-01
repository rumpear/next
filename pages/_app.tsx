import Head from 'next/head';
import { AppProps } from 'next/app';
import { Layout } from '../src/components/';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout>
    <>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
    //  </Layout>
  );
}
