import React from "react";
// import ServicePage from "./ServicePage";
import EcomImage from "../../images/about/ecommers.jpg";
import EcomImage1 from "../../images/about/e-commers1.jpg";
import EcomImage2 from "../../images/about/e-commers2.jpg";
import CommonServicePage from "./CommonServicePage";

const Ecommerce = () => {
  const pageContent = {
    title: "E-commerce & Retail Data Scraping",
    subtitle: "Don't Just Acquire, Conquer the Customers",
    mainImage: EcomImage,
    content: {
      hero: [
        "Digital shelves overflowing with confusion? Lost in the complexities of competitor listings?",
        "Fear not, intrepid merchants! The One Crawling Solution unleashes laser-guided data extraction, ready to transform your online presence into a profit fortress.",
      ],
      sections: [
        {
          title: "Dig Deeper With Our Crawling Services:",
          image: EcomImage1,
          list: [
            {
              title: "Product intel",
              description:
                "Unearth hidden gems, track inventory shifts, and pinpoint hot-selling items with laser precision. Specs, prices, reviews – your secret weapon awaits.",
            },
            {
              title: "Market trends",
              description:
                "Discover untapped niches, predict shifting tides, and identify the next big thing before your competitors even blink. Prepare to ride the wave of opportunity.",
            },
            {
              title: "Competitor secrets",
              description:
                "Unveil their pricing strategies, dissect their promotions, and discover their best-selling tactics. Knowledge is power, wield it wisely.",
            },
            {
              title: "Customer whispers",
              description:
                "Understand buying patterns, decipher product perception, and personalize your approach for maximum engagement. Every click becomes a conversion.",
            },
          ],
        },
        {
          title: "No more endless scrolling, no more guesswork.",
          image: EcomImage2,
          paragraphs: [
            "We deliver clean, structured data, your ready-made compass to:",
          ],
          list: [
            {
              title: "Optimize your empire",
              description:
                "Make data-driven decisions on product offerings, pricing, and marketing. Watch your brand ascend like a digital phoenix.",
            },
            {
              title: "Refine your product arsenal",
              description:
                "Identify market gaps, refine existing products, and stay ahead of the trend curve. Innovation is your shield, data your chief.",
            },
            {
              title: "Engage your customers like never before",
              description:
                "Target the right audiences, personalize offers with laser focus, and witness conversion rates soar. Every click becomes a loyal customer.",
            },
          ],
        },
      ],
    },
    ctaText: "Contact us today and watch your E-commerce Business Shoot Up",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Ecommerce;
