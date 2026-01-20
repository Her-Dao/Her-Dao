import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ weight: ["400","700"], subsets: ["latin"], variable: "--font-unbounded" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={unbounded.variable}>
      <Component {...pageProps} />
    </div>
  );
}
