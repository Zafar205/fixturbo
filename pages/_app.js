import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import '../src/index.scss';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JS only on client side
    require('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0C0XXT0XX7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0C0XXT0XX7');
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}
