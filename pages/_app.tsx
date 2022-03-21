import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import data from "../data/data";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} data={data} />;
}

export default MyApp;
