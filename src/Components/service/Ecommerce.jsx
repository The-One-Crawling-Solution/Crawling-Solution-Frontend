import React from "react";
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
        {
          title: "How We Deliver Data Faster Than Your Competition",
          image: EcomImage2,
          paragraphs: [
            "In the fast-paced e-commerce world, timing is everything. Here’s a breakdown of our streamlined data scraping process that ensures you receive accurate, structured data faster than ever:",
          ],
          list: [
            {
              title: "Discovery & Customization",
              description:
                "We begin by sitting down with you (virtually, of course!) to understand your exact needs. Which products, platforms, or regions do you want to focus on? We customize our scraping approach to align perfectly with your goals.",
            },
            {
              title: "Target Source Mapping",
              description:
                "We scout and identify the most relevant e-commerce websites, marketplaces, and platforms for data collection. This ensures you only get high-quality, actionable data that directly impacts your business decisions.",
            },
            {
              title: "Efficient Data Extraction",
              description:
                "Utilizing our state-of-the-art scraping tools, we extract valuable data – from product specifications to customer reviews. We gather this information in real-time, so you’re always a step ahead of market changes.",
            },
          ],
        },
        {
          title: "Data Quality and Speed of Delivery",
          image: EcomImage2,
          list: [
            {
              title: "Data Refinement",
              description:
                "Raw data is only useful when it's clean and organized. Our team meticulously filters and structures the data, removing irrelevant details and noise. This polished dataset is then formatted to your preferred structure (CSV, Excel, JSON, APIs) for immediate integration into your analytics tools.",
            },
            {
              title: "Quality Control",
              description:
                "Before delivery, we perform multiple checks to ensure the data’s accuracy, relevance, and completeness. This step guarantees you’re receiving insights that are not only timely but also reliable.",
            },
            {
              title: "Lightning-Fast Delivery",
              description:
                "Our automated and streamlined process allows us to deliver data reports in record time, whether you need them daily, weekly, or monthly. We pride ourselves on consistently delivering before deadlines to keep you at the forefront of the market.",
            },
            {
              title: "Post-Delivery Support",
              description:
                "Our team provides ongoing support, including regular updates, maintenance, and fine-tuning of data scraping processes to match market dynamics.",
            },
          ],
        },
        {
          title: "Why Choose The One Crawling Solution?",
          image: EcomImage2,

          list: [
            {
              title: "Data that Drives Action",
              description:
                "We don’t just deliver data; we deliver insights that drive impactful decisions, helping you navigate the e-commerce landscape like a pro.",
            },
            {
              title: "Custom-Tailored Services",
              description:
                "Your business is unique, and so are your data needs. Our scraping services are fully customizable, targeting the exact information that fuels your growth.",
            },
            {
              title: "Stay Ahead of Trends",
              description:
                "With real-time data at your disposal, you can anticipate market shifts and adjust your strategies proactively, keeping you ahead of the curve.",
            },
            {
              title: "100% Compliance",
              description:
                "We adhere to all legal and ethical guidelines for data scraping, ensuring that our process is respectful of data privacy laws and website terms of service.",
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
