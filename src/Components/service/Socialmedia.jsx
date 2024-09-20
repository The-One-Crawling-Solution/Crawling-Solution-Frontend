import React from "react";
import socialMediaImage1 from "../../images/about/entertainment1.jpg";
import socialMediaImage2 from "../../images/about/entertainment2.jpg";
import socialMediaImage3 from "../../images/about/entertainment3.jpg";
import CommonServicePage from "./CommonServicePage";

const SocialMedia = () => {
  const pageContent = {
    title: "Social Media Scraping",
    subtitle:
      "Ignite Your Social Spark: Unleash Audience Insights with Social Media Scraping",
    mainImage: socialMediaImage1,
    content: {
      hero: [
        "Feeling lost in the ever-churning social media game? We get it. Navigating the dynamic world of social media management (SMM) can be a mind-bender, leaving you unsure what resonates with your audience and how to craft a winning strategy.",
        "We act as your digital spyglass, allowing you to peek behind the curtain and analyze real-time social media conversations happening across various platforms.",
        "This intel empowers you to understand your audience's desires, tailor your content, and spark engaging discussions that drive results.",
      ],
      sections: [
        {
          title: "How We Transform You into a Social Media Champion",
          image: socialMediaImage2,
          list: [
            {
              title: "Audience Enigma Cracked",
              description:
                "Uncover the demographics, interests, and online behavior patterns of your target audience. Craft laser-focused content that resonates with your followers.",
            },
            {
              title: "Competitor Canvas Decoded",
              description:
                "Analyze competitor strategies, popular content formats, and engagement tactics. Refine your approach to stand out from the crowd.",
            },
            {
              title: "Trending Topics Forecasted",
              description:
                "Identify emerging trends, predict user behavior shifts, and pinpoint opportunities for innovative content creation. Stay ahead of the curve and capture attention.",
            },
            {
              title: "Platform Prowess Unlocked",
              description:
                "Track evolving algorithms, content moderation policies, and advertising best practices. Ensure your campaigns maximize reach and minimize roadblocks.",
            },
          ],
        },
        {
          title: "Fuel Your Social Media Strategy with Data-Driven Decisions",
          image: socialMediaImage3,
          list: [
            {
              title: "Craft Compelling Content",
              description:
                "Make data-driven decisions regarding content themes, formats, and posting schedules. Watch engagement rates soar as you captivate your target audience.",
            },
            {
              title: "Refine Your Targeting",
              description:
                "Identify the most effective platforms and communities to reach your ideal customers. Let data guide you to where your brand will have the most impact.",
            },
            {
              title: "Spark Authentic Engagement",
              description:
                "Tailor your response strategies to foster genuine connections based on data insights. Every interaction becomes an opportunity to build trust.",
            },
          ],
          paragraphs: [
            "We deliver clean, structured data – your social media blueprint to navigate the online landscape and craft winning strategies.",
            "Say goodbye to guesswork and endless social media listening tools. Let us transform complex interactions into actionable insights, driving your brand's social media success.",
            "Contact The One Crawling Solution today and harness the power of SMM scraping. Let us help you rise to the top of the social media food chain!",
          ],
        },
      ],
    },
    ctaText: "Ready to captivate your audience? Contact us today!",
  };

  return <CommonServicePage {...pageContent} />;
};

export default SocialMedia;
