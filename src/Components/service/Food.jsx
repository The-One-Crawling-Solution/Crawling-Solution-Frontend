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
          title:
            "We meticulously scrub and polish this raw data, serving it up on a silver platter of success:",
          image: foodImage2,
          list: [
            {
              title: "Target the right foodies",
              description:
                "Deliver personalized offers, and hit bullseyes with every marketing campaign. Watch those orders roll in like a sushi train.",
            },
            {
              title: "Craft drool-worthy campaigns",
              description:
                "Know what people crave, where they crave it, when they crave it. Your marketing will be irresistible, like a perfectly salted french fry.",
            },
            {
              title: "Optimize your app",
              description:
                "Identify pain points, streamline the experience, and watch ratings soar like a soufflé. Make your app the smoothest ride in town.",
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
