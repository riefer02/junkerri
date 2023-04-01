import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import Script from "next/script";
import { CartProvider } from "@/hooks/use-shopping-cart";
import { ModalProvider } from "@/hooks/use-modal";
import NavigationContext from "../contexts/NavigationContext";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { Footer } from "@/components/index";
import { Modal } from "@/components/Modal";
import { Banner } from "@/components/Banner";
import { Toaster } from "react-hot-toast";
import MobileNav from "@/components/MobileNav";

import { Poppins } from "@next/font/google";
import { gtmVirtualPageView } from "../lib/gtm";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleSetActive = (value) => {
    setIsActive(value);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setIsActive(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // GTM
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: pageProps.page || null,
      url: router.pathname,
    };

    gtmVirtualPageView(mainDataLayer);
  }, [pageProps]);

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
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      ></Script>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <CartProvider>
        <ModalProvider>
          <NavigationContext.Provider
            value={{ isActive, setIsActive: handleSetActive }}
          >
            <div className={`min-h-screen flex flex-col`}>
              <Banner />
              <Header />
              {isActive && <MobileNav />}
              <main className="flex-grow">
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
            <Modal />
          </NavigationContext.Provider>
        </ModalProvider>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
