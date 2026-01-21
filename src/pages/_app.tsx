import "@/styles/globals.css";

import { Inter } from "next/font/google";

import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div
			className={`bg-gradient-to-t from-moonlightInterface to-moonlightBase
      h-screen overflow-hidden text-moonlightWhite ${inter.className}`}
		>
			<Component {...pageProps} />
		</div>
	);
}
