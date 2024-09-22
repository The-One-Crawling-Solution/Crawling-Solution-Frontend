import React from "react";
import CommonServicePage from "./CommonServicePage";
import foodImage from "../../images/about/food.jpg";
import foodImage1 from "../../images/about/food1.jpg";
import foodImage2 from "../../images/about/pexels-ella-olsson-1640777.jpg";

const Food = () => {
  const pageContent = {
    title: "Food Delivery Scraping",
    subtitle: "Starving for insights into the food delivery war zone?",
    mainImage: foodImage,
    content: {
      hero: [
        "Forget stale scraps; get ready to devour a five-course data buffet with The One Crawling Solution. We're the secret spice in your app, unearthing hidden gems and trends hotter than a habanero.",
      ],
      sections: [
        {
          title: "What Can You Do With the Data?",
          image: foodImage1,
          list: [
            {
              title: "Every menu is a map",
              description:
                "Prices, dishes, deals – exposed like a chef's secret recipe. Know what rivals are cooking, and what customers crave.",
            },
            {
              title: "Ghost kitchens galore",
              description:
                "Discover hidden jewels before the masses, and become the delivery Robin Hood of off-the-beaten-path bites.",
            },
            {
              title: "Delivery decoded",
              description:
                "Track trends, map hot zones, and predict peak times like a seasoned waiter. Know when the hunger pangs hit hardest.",
            },
            {
              title: "Competitor cravings",
              description:
                "Peek at their secret menu, pricing tricks, and marketing moves. Learn their tricks, and outsmart their hacks.",
            },
          ],
        },
        {
          title: "How We Deliver Food Data at Lightning Speed",
          image: foodImage2,
          list: [
            {
              title: "Discovery & Customization",
              description:
                "We begin by understanding your unique data needs. Are you looking to track restaurant menus, ingredient pricing, food delivery trends, or customer reviews? We customize our scraping approach to target the information that matters most to your business, ensuring your goals are met efficiently.",
            },
            {
              title: "Target Source Mapping",
              description:
                "We identify and map out the most relevant food websites, restaurant platforms, online marketplaces, and review sites. This targeted source mapping guarantees you receive high-quality, actionable insights that directly impact your business strategies.",
            },
            {
              title: "Advanced Data Extraction",
              description:
                "Using state-of-the-art scraping tools, we extract real-time data from multiple food sources. Whether it's menu updates, ingredient availability, pricing fluctuations, or food delivery trends, our tools gather the essential information to keep you ahead of the competition.",
            },
            {
              title: "Data Refinement",
              description:
                "Raw data becomes valuable insights through our meticulous cleaning and structuring process. We filter out irrelevant details, remove duplicates, and organize the information into your preferred format (CSV, Excel, JSON, APIs) for seamless integration into your analytics tools or databases.",
            },
            {
              title: "Quality Control",
              description:
                "Before delivering the final dataset, our team performs rigorous quality checks to ensure accuracy, relevance, and completeness. This step guarantees that the insights you receive are not only timely but also reliable and ready for immediate use.",
            },
            {
              title: "Rapid Delivery",
              description:
                "Our automated, streamlined scraping process enables us to deliver data reports swiftly—whether you need them daily, weekly, or monthly. We pride ourselves on delivering before deadlines, so you always have the information you need to make informed decisions in the fast-paced food industry.",
            },
            {
              title: "Post-Delivery Support",
              description:
                "The food industry is ever-evolving, and so are your data requirements. We provide ongoing support, including regular updates, maintenance, and adjustments to our scraping processes, ensuring you stay on top of market dynamics.",
            },
          ],
        },
        {
          title: "Why Choose The One Crawling Solution for Food Data Scraping?",
          image: foodImage2,
          list: [
            {
              title: "Data That Drives Decisions",
              description:
                "We don’t just scrape data; we provide insights that help you make strategic, data-driven decisions in the food sector.",
            },
            {
              title: "Custom-Tailored Services",
              description:
                "Your food business is unique, and so are your data needs. Our scraping services are fully customizable, focusing on the exact information that fuels your growth.",
            },
            {
              title: "Stay Ahead of Market Trends",
              description:
                "With real-time, high-quality data, you can track market shifts, competitor activities, and changing consumer preferences, enabling you to adjust strategies proactively.",
            },
            {
              title: "100% Compliance",
              description:
                "We strictly adhere to all legal and ethical guidelines for data scraping, ensuring our process respects data privacy laws, industry regulations, and website terms of service.",
            },
          ],
          paragraphs: [
            "Ditch the manual menu browsing, stop guessing what's hot, and leave the data drudgery to us. We deliver a clean, structured feast, ready to empower your:",
            "Restaurant rocket ship: Blast past the competition with data-driven decisions and targeted strategies. Become the go-to spot for every craving.",
            "Delivery dynasty: Reign over your local market, expand into new territories, and build a loyal customer base. Rule the food kingdom!",
            "Tech triumph: Finesse your app, personalize the experience, and become the platform for every food fantasy. Be the Willy Wonka of the delivery world.",
          ],
        },
      ],
    },
    ctaText: "Ready to cook up some profits? Contact us today!",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Food;
