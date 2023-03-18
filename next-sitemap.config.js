/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://junkerri.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  exclude: ["/products-sitemap.xml", "/products/*"],
  // ...other options
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/products-sitemap.xml`],
  },
};
