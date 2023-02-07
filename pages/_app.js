import "tailwindcss/tailwind.css";
import Head from "next/head";
import { CartProvider } from "@/hooks/use-shopping-cart";
import { ModalProvider } from "@/hooks/use-modal";

import { Footer } from "@/components/index";
import { Modal } from "@/components/Modal";
import { Toaster } from "react-hot-toast";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Junkerri Art | Playful Abstract Creations by Nepali Artist Aastha
          Karki
        </title>
        <meta
          name="description"
          content="Discover the vibrant and captivating world of Junkerri Art, brought to life by the talented Nepali artist, Aastha Karki. Immerse yourself in Aastha's playful abstract works that seamlessly blend color and form, creating an enthralling experience for all who behold them. Explore the unique and beautiful creations of Junkerri Art today."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <CartProvider>
        <ModalProvider>
          <div className={`min-h-screen flex flex-col`}>
            <Header />
            <main className="flex-grow">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
          <Modal />
        </ModalProvider>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
