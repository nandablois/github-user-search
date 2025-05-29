import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Busca de perfis - GitHub</title>
        <meta name="description" content="App para buscar perfis e repositórios do GitHub" />

      </Head>

      <Component {...pageProps} />
    </>
  );
}
