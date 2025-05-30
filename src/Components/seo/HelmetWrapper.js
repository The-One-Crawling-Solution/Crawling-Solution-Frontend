import React from "react";
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
      <meta name="description" content={seoData.description} />
      <meta name="description" content={seoData.description} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default HelmetWrapper;
