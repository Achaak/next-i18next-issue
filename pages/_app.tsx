import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import SEO from "next-seo.config";
//@ts-ignore
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
