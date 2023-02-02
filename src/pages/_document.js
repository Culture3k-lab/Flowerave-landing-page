import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      {/* FAVICONS */}

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333"></link>
      <meta name="msapplication-TileColor" content="#000000"></meta>
      <meta name="theme-color" content="#A2FA32"></meta>

      <title>Flowerave・NFT</title>

      {/* BODY */}

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
