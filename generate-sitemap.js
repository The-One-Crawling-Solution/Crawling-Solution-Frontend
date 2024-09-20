const SitemapGenerator = require("sitemap-generator");

// Replace with your actual website URL
const generator = SitemapGenerator(
  "https://theonecrawlingsolution.netlify.app",
  {
    stripQuerystring: false,
    filepath: "./public/sitemap.xml",
    maxEntriesPerFile: 50000,
    changeFreq: "daily",
    lastMod: true,
    priorityMap: {
      "/": 1.0,
      "/contact": 0.9,
      "/portfolio": 0.9,
      "/about": 0.8,
      "/services": 0.8,
      "/portfolioDownload": 0.7,
      "/webscraping": 0.6,
      "/appscraping": 0.6,
      "/webscarpingapi": 0.6,
      "/blog": 0.6,
    },
  }
);

// Register event listeners
generator.on("done", () => {
  console.log("Sitemap generated!");
});

// Handle error cases
generator.on("error", (error) => {
  console.error("Error generating sitemap:", error);
});

// Start the sitemap generation process
generator.start();
