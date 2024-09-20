import React from "react";
import HealthImage from "../../images/about/healthcare2.jpg";
import HealthImage1 from "../../images/about/healthcare1.jpg";
import HealthImage2 from "../../images/about/healthcare.jpg";
import CommonServicePage from "./CommonServicePage";

const Healthcare = () => {
  const pageContent = {
    title: "Healthcare Scraping",
    subtitle:
      "Data-Driven Diagnosis: Conquer Healthcare Insights with Scraping",
    mainImage: HealthImage,
    content: {
      hero: [
        "Unmask trends, optimize operations, and thrive in the evolving healthcare landscape.",
      ],
      sections: [
        {
          title: "What are you waiting for?",
          image: HealthImage1,
          list: [
            {
              title: "Patient Demographics",
              description:
                "Understand age, location, and illness trends to target your services effectively.",
            },
            {
              title: "Treatment Protocols",
              description:
                "Analyze competitor procedures, medication trends, and emerging therapies to stay ahead of the curve.",
            },
            {
              title: "Market Potential",
              description:
                "Identify underserved areas, predict treatment surges, and pinpoint profitable niches for expansion.",
            },
            {
              title: "Industry Regulations",
              description:
                "Track evolving healthcare policies, compliance protocols, and reimbursement structures to stay informed.",
            },
          ],
        },
        {
          title: "Leverage Data for Your Decisions:",
          image: HealthImage2,
          list: [
            {
              title: "Optimize Your Practice",
              description:
                "Make data-driven decisions on staffing, equipment, and treatment offerings. Watch your efficiency and patient satisfaction soar.",
            },
            {
              title: "Refine Your Research",
              description:
                "Identify promising clinical trials, analyze drug efficacy, and collaborate with fellow researchers. Innovation is your cure, data your microscope.",
            },
            {
              title: "Engage Your Patients Like Never Before",
              description:
                "Understand their needs, personalize treatment plans, and improve communication for better outcomes. Every click becomes a loyal patient.",
            },
          ],
          paragraphs: [
            "Clean, Structured Data - Your Ready-Made Solution",
            "We deliver clean, structured data, your ready-made stethoscope to diagnose your practice's health, and chart a course for success. Say goodbye to endless paperwork and guesswork – we make the complex clear, giving you actionable insights to fuel your growth.",
            "Ready to Diagnose Your Success?",
            "Contact The One Crawling Solution today and unlock the power of healthcare data scraping. Let us turn insights into your arsenal.",
          ],
        },
      ],
    },
    ctaText: "Let us turn insights into your arsenal.",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Healthcare;
