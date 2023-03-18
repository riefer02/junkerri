import { getServerSideSitemapLegacy } from "next-sitemap";
import products from "../products/products.production.json";

const siteUrl = process.env.SITE_URL || "https://junkerri.com";

export const getServerSideProps = async (ctx) => {
  const fields = products.map(({ slug }) => {
    return {
      loc: `${siteUrl}/products/${slug}`, // Absolute url
      lastmod: new Date().toISOString(),
      priority: 0.7,
      changefreq: "daily",
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
