import "../styles/app.css";
import type { AppProps } from "next/app";
import { XStateProvider } from "../machines/XStateProvider";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <XStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </XStateProvider>
  );
}
