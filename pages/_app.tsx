import type { AppProps } from "next/app";
import "../styles/globals.css";

// The custom App is shared by every route and is the right place for global CSS.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
