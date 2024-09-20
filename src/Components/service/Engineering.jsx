import React from "react";
import CommonServicePage from "./CommonServicePage";
// Import images if needed

const Engineering = () => {
  const pageContent = {
    title: "Engineering Services",
    subtitle: "Innovative Solutions for Complex Challenges",
    mainImage: "path_to_main_image.jpg", // Replace with actual image path
    content: {
      hero: [
        "Engineering excellence starts here. Transforming ideas into reality with precision and expertise.",
        "Our engineering services cover a broad spectrum, from concept design to implementation, ensuring quality and innovation at every step.",
      ],
      sections: [
        {
          title: "Our Engineering Solutions Include:",
          image: "path_to_section_image1.jpg", // Replace with actual image path
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
          image: "path_to_section_image2.jpg", // Replace with actual image path
          paragraphs: [
            "We provide cutting-edge solutions that address the most challenging engineering problems.",
            "Our team of experts combines deep industry knowledge with advanced technologies to deliver exceptional results.",
            "Partner with us to experience engineering excellence that drives success and innovation.",
          ],
        },
      ],
    },
    ctaText:
      "Get in touch with us today to explore how our engineering services can drive your success.",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Engineering;
