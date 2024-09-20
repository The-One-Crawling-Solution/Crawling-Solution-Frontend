import React from "react";
import RealImage from "../../images/about/realestate.jpg";
import RealImage1 from "../../images/about/realestate1.jpg";
import RealImage2 from "../../images/about/realestate2.jpg";
import CommonServicePage from "./CommonServicePage";

const Realestate = () => {
  const pageContent = {
    title: "Real Estate Data Scraping",
    subtitle: "Unleash your wrath on the industry and take over.",
    mainImage: RealImage,
    content: {
      hero: [
        "Your real estate intel just got a quantum leap. Introducing The One Crawling Solution's Real Estate Data Scraping – your laser-guided roadmap to market domination.",
        "Forget crumbs, we're talking about exhuming the treasure trove of property data. Imagine granular details at your fingertips: specs so precise you can visualize every floorboard, listings so hidden they shimmer like buried gold, market trends sharper than a shark's fin, and the whispered secrets of your competitors laid bare.",
        "We meticulously scrape, scrub, and polish this raw intel, delivering it ready to fuel your success",
      ],
      sections: [
        {
          title: "You are Not Wrong. You are Just Late to the Trend.",
          image: RealImage1,
          paragraphs: [
            "Tired of chasing shadows in the murky real estate market? Drowning in a sea of listings? We get it. Finding the right intel is brutal.",
            "That's where we come in, with laser-focused real estate data scraping. We'll mine the web and unearth hidden gems",
          ],
          list: [
            {
              title: "Property details",
              description: "Specs, prices, locations, you name it.",
            },
            {
              title: "Market trends",
              description: "Unmask hot pockets, and identify undervalued gems.",
            },
            {
              title: "Competitor intel",
              description:
                "Spy on their listings, pricing strategies, and more.",
            },
            {
              title: "Lead generation",
              description: "Target the right buyers and sellers, effortlessly.",
            },
          ],
        },
        {
          title: "Turn Data into Your Secret Ingredient",
          image: RealImage2,
          paragraphs: [
            "No more manual scouring. No more guesswork. We deliver clean, structured data, ready to fuel your:",
          ],
          list: [
            {
              title: "Investment strategies",
              description: "Make smarter decisions, and maximize returns.",
            },
            {
              title: "Market research",
              description:
                "Gain unparalleled insights, and stay ahead of the curve.",
            },
            {
              title: "Lead generation",
              description: "Reach the right people, and close more deals.",
            },
          ],
        },
      ],
    },
  };

  return <CommonServicePage {...pageContent} />;
};

export default Realestate;
