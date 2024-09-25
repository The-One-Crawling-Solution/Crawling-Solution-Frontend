import React from "react";
import CommonServicePage from "./CommonServicePage";
// Import images if needed

const Engineering = () => {
  const pageContent = {
    title: "OTT Services",
    subtitle: "Elevate Your OTT Strategy with Cutting-Edge Data Insights",
    mainImage:
      "https://theonecrawlingsolutionimages.s3.eu-north-1.amazonaws.com/images/about/pexels-pietro-jeng-65128.jpg",
    content: {
      hero: [
        "In the dynamic realm of Over-the-Top (OTT) platforms, staying ahead requires more than just access to data—it demands actionable insights that drive innovation and strategy. Our OTT platform data scraping service delivers unparalleled intelligence, empowering you to redefine your approach to streaming and content management.",
      ],
      sections: [
        {
          title: "Why Choose The One Crawling Solution for OTT Data Scraping?",
          image:
            "https://theonecrawlingsolutionimages.s3.eu-north-1.amazonaws.com/images/about/entertainment1.jpg",
          list: [
            {
              title: "Innovative Insights:",
              description:
                "We provide more than just data—we deliver innovative insights that drive strategic decision-making and keep you ahead in the competitive OTT landscape.",
            },
            {
              title: "Tailored Solutions: ",
              description:
                "Our scraping services are customized to meet your unique business objectives, ensuring that you receive data that directly supports your strategic goals.",
            },
            {
              title: "Future-Ready Intelligence:",
              description:
                "Stay ahead of market trends and viewer preferences with future-ready intelligence that helps you anticipate changes and adapt your strategies proactively.",
            },
            {
              title: "Ethical Practices:",
              description:
                "We uphold the highest standards of legal and ethical data scraping, ensuring compliance with privacy laws, copyright regulations, and platform terms of service.",
            },
          ],
        },
        {
          title: "Our OTT Solutions Include:",
          image:
            "https://theonecrawlingsolutionimages.s3.eu-north-1.amazonaws.com/images/about/pexels-cottonbro-studio-4709391.jpg",
          list: [
            {
              title: "Product Design",
              description:
                "Innovative and user-centric designs that bring your vision to life with functionality and aesthetic appeal.",
            },
            {
              title: "Process Optimization",
              description:
                "Streamline operations and enhance efficiency with tailored solutions and state-of-the-art technologies.",
            },
            {
              title: "System Integration",
              description:
                "Seamless integration of various systems to ensure smooth operation and data flow across platforms.",
            },
            {
              title: "Quality Assurance",
              description:
                "Rigorous testing and quality control to ensure your products meet the highest standards and performance criteria.",
            },
          ],
        },

        {
          title: "Why Choose Us?",
          image:
            "https://theonecrawlingsolutionimages.s3.eu-north-1.amazonaws.com/images/about/pexels-vlada-karpovich-4050312.jpg",
          list: [
            {
              title: "Inovative Insights:",
              description:
                "We provide more than just data—we deliver innovative insights that drive strategic decision-making and keep you ahead in the competitive OTT landscape.",
            },
            {
              title: "Tailored Solutions:",
              description:
                "Our scraping services are customized to meet your unique business objectives, ensuring that you receive data that directly supports your strategic goals.",
            },
            {
              title: "Future-Ready Intelligence:",
              description:
                "Stay ahead of market trends and viewer preferences with future-ready intelligence that helps you anticipate changes and adapt your strategies proactively.",
            },
            {
              title: "Ethical Practices:",
              description:
                "We uphold the highest standards of legal and ethical data scraping, ensuring compliance with privacy laws, copyright regulations, and platform terms of service.",
            },
          ],
          paragraphs: [
            " With The One Crawling Solution, you gain a powerful ally in navigating the OTT industry’s complexities. Our cutting-edge data insights will help you innovate, optimize, and succeed in the ever-evolving world of streaming media.",
          ],
        },
      ],
    },
    ctaText:
      "Get in touch with us today to explore how our OTT services can drive your success.",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Engineering;
