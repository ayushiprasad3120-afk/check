/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.insuredirect.com",
  generateRobotsTxt: false, // handled by app/robots.ts
  exclude: ["/campaign/*", "/api/*"],
  changefreq: "weekly",
};
