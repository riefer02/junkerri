import "tailwindcss/tailwind.css";
import Head from "next/head";
// import { useFonts } from 'next-fonts'
import { CartProvider } from "@/hooks/use-shopping-cart";
import { Footer } from "@/components/index";
import { Toaster } from "react-hot-toast";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          E-commerce store built with Next.js and Stripe checkout | Junkerri
        </title>
        <meta
          name="description"
          content="E-commerce store built with Next.js and Stripe checkout by riefer.io"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
