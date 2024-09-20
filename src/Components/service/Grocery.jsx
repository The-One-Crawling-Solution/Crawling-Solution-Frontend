import React from "react";
import GroceryImage from "../../images/about/grocery.jpg";
import GroceryImage1 from "../../images/about/grocery1.jpg";
import GroceryImage2 from "../../images/about/grocery2.jpg";
import CommonServicePage from "./CommonServicePage";

const GroceryScraping = () => {
  const pageContent = {
    title: "Grocery Delivery Scraping",
    subtitle: "Get Grocery Insights with One Click With Our Solutions",
    mainImage: GroceryImage,
    content: {
      hero: [
        "Struggling to navigate the cutthroat world of grocery delivery? Ditch the coupons and scan flyers – it's time to grab a data cart and shop for insights the smart way.",
        "The One Crawling Solution unlocks the pantry of possibilities hidden within those delivery apps, serving up fresh, juicy intel so you can dominate the aisles.",
      ],
      sections: [
        {
          title: "What If You Knew?",
          image: GroceryImage1,
          list: [
            {
              title: "What your rivals stock",
              description:
                "Prices, brands, trending items – laid bare like a weekly ad. Outsmart their specials and stay one step ahead.",
            },
            {
              title: "Hidden grocery goldmines",
              description:
                "Discover niche markets and local gems before the competition. Become the Robin Hood of delivery, delivering forgotten favorites faster than a shopper on a sugar rush.",
            },
            {
              title: "Delivery decoded",
              description:
                "Track peak hours, map high-demand zones, and predict shopping sprees like a seasoned cashier. Know when those carts overflow and tills ring.",
            },
            {
              title: "Customer cravings cracked",
              description:
                "Peek at their grocery lists, loyalty programs, and buying habits. Learn what they yearn for and keep them coming back for seconds (or thirds).",
            },
          ],
        },
        {
          title: "We Don't Just Deliver Data",
          image: GroceryImage2,
          list: [
            {
              title: "Target the right shoppers",
              description:
                "Craft personalized deals and promotions that hit bullseyes, not bargain bins. Watch those orders roll in like a conveyor belt of profit.",
            },
            {
              title: "Cook up irresistible campaigns",
              description:
                "Know what they crave, where they buy, and when they stock up. Your marketing will be as tempting as a freshly baked croissant.",
            },
            {
              title: "Optimize your app",
              description:
                "Streamline the checkout, fix those buggy aisles, and watch user satisfaction soar like a soufflé. Make your app the smoothest, tastiest grocery experience in town.",
            },
          ],
          paragraphs: [
            "How Will You Benefit From This?",
            "We serve up a clean, structured feast of information, ready to empower your:",
            "Grocery growth engine: Fuel your expansion with data-driven decisions and targeted strategies. Become the one-stop shop for every household need.",
            "Delivery dominance: Reign supreme in your local market, conquer new neighborhoods, and build a loyal army of shoppers. Own the grocery kingdom!",
            "Tech triumph: Refine your app, personalize the experience, and become the platform for every culinary dream. Be the Willy Wonka of the delivery world, where the golden ticket is a perfectly packed fridge.",
            "Stop rummaging in the bargain bin of insights.",
            "Grab your data cart and let The One Crawling Solution take your grocery delivery app to the top shelf.",
          ],
        },
      ],
    },
    ctaText: "Ready to stock up on success? Contact us today!",
  };

  return <CommonServicePage {...pageContent} />;
};

export default GroceryScraping;
