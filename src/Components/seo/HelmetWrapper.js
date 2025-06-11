import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import seoConfig from "./seoConfig";

const HelmetWrapper = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const seoData = seoConfig[currentPath] || {
    title: "The One Crawling Solution",
    description: "The One Crawling Solution",
  };

  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content="The One Crawling Solution" />
      <meta
        property="og:image"
        content="assets/images/slider/WebScraping.jpeg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:url" content={window.location.href} />
      <meta name="twitter:description" content={seoData.description} />
      <meta
        name="twitter:image"
        content="assets/images/slider/WebScraping.jpeg"
      />
      <meta
        name="twitter:image:alt"
        content="Best web scraping service in USA | The One Crawling Solution"
      />
      <meta name="twitter:site" content="@onecrawling6263" />
      <meta name="twitter:creator" content="@onecrawling6263" />
      <link rel="canonical" href="https://theonecrawlingsolution.com/" />
    </Helmet>
  );
};

export default HelmetWrapper;
