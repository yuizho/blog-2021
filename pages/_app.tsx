import Head from 'next/head';
import { FC } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>J'aime les ramens</title>
      {/* Google Tag Manager*/}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </Head>

    <Component {...pageProps} />
  </>
);
export default MyApp;
