import Head from 'next/head';
import { FC } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>J'aime les ramens</title>
    </Head>

    <Component {...pageProps} />
  </>
);
export default MyApp;
