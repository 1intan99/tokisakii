import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Tokisaki"
        titleTemplate="Tokisaki"
        defaultTitle="Tokisaki"
        description="Hey There! Im Tokisaki!"
        openGraph={{
          url: "https://devraiden.tech",
          title: "Tokisaki",
          description:
            "Hey I'am Tokisaki! Do you need something? read my website and join my discord.",
          images: [
            {
              url: "https://cdn.discordapp.com/banners/242969117479403520/a_b2ce0f3d99c78d94386b0fd9e2907286.gif",
              width: 600,
              height: 240,
              alt: "Tokisaki",
            },
          ],
        }}
        twitter={{
          handle: "@luminaluna__",
          site: "@luminaluna__",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, tokisaki, tokisaki, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/gif" href="https://cdn.discordapp.com/avatars/242969117479403520/a_5c99bc8f5b30438c9828b88fee3295ad.gif" sizes="16x16" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
