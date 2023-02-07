import Head from "next/head";

const NextHead = ({ title, description, keywords, image, url, author }) => {
  const defaultDescription =
    "Discover the vibrant and captivating world of Junkerri Art, brought to life by the talented Nepali artist, Aastha Karki. Immerse yourself in Aastha's playful abstract works that seamlessly blend color and form, creating an enthralling experience for all who behold them. Explore the unique and beautiful creations of Junkerri Art today.";
  const defaultKeywords =
    "Junkerri Art, Aastha Karki, Nepali artist, playful abstract, captivating, enthralling, color, form, unique, beautiful creations";
  const defaultTitle =
    "Junkerri Art | Playful Abstract Creations by Nepali Artist Aastha Karki";

  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://junkerriart.com";
  const ogURL = `${baseURL}junkerri-open-graph.jpg`;

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:image" content={image || ogURL} />
      <meta property="og:url" content={url || window.location.href || ""} />
      <meta name="author" content={author || "Andrew Riefenstahl @riefer02"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || ogURL} />
    </Head>
  );
};
export default NextHead;
