import Head from "next/head";

const NextHead = ({ title, description, keywords, image, author }) => {
  const defaultDescription =
    "Discover the vibrant and captivating world of Junkerri Art, brought to life by Nepali artist, Aastha Karki. Immerse yourself in Aastha's playful abstract works.";
  const defaultKeywords =
    "Junkerri Art, Aastha Karki, Nepali artist, playful abstract, captivating, enthralling, color, form, unique, beautiful creations";
  const defaultTitle =
    "Junkerri Art | Playful Abstract Art by Nepali Artist Aastha Karki";

  let url;
  typeof window !== "undefined"
    ? (url = window.location.href)
    : (url = "https://junkerri.com/");

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://junkerri.com/";

  const ogURL = `${baseURL}junkerri-open-graph.jpg`;

  const schemaMarkup = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    name: "Junkerri Art",
    image: [ogURL],
    description:
      "Discover the vibrant and captivating world of Junkerri Art, created by Nepali artist Aastha Karki. Explore our unique collection of playful abstract works.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7728 Manassas Dr.",
      addressLocality: "Austin",
      addressRegion: "Texas",
      postalCode: "78745",
      addressCountry: "United States",
    },
    email: "junkerriart@gmail.com",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.441738,
      longitude: -97.766586,
    },
    url: baseURL,
    sameAs: ["https://www.instagram.com/junkerri"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "35.00",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Junkerri Arts Local Store",
      },
    },
  };

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:image" content={image || ogURL} />
      <meta property="og:url" content={url || url || ""} />
      <meta name="author" content={author || "Andrew Riefenstahl @riefer02"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || ogURL} />
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Head>
  );
};
export default NextHead;
