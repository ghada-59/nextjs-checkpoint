import { Head, Html, Main, NextScript } from "next/document";

// Custom document controls the outer HTML document, including its language.
export default function Document() {
  return (
    <Html lang="en">
      <Head><link rel="icon" href="/favicon.svg" type="image/svg+xml" /></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
