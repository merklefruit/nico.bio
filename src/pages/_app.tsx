import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Head from "next/head";

import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`bg-gradient-to-t from-moonlightInterface to-moonlightBase 
      min-h-screen text-moonlightWhite ${inter.className}`}
    >
      <Head>
        <script
          defer
          id="pirschjs"
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          data-code="SOAHHIcBiJFDKELHN3dz6Y1XUty0anTs"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}
