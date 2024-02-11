import "../styles/globals.css";
import "@coreui/icons/css/all.min.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QF6T58D0LR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-QF6T58D0LR');`}
      </Script>
      <Script defer data-domain="emil.zip" src="https://plausible.io/js/script.tagged-events.outbound-links.js" />
      <Head>
        <title>Emil Ahlbäck</title>
        <link rel="canonical" href="https://emil.zip" />

        <meta name="description" content="Emil Ahlbäck" />
        <meta name="author" content="Emil Ahlbäck" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        
        <link rel="icon" href="/static/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
