import React from "react";
import JobImage1 from "../../images/about/job1.jpg";
import JobImage2 from "../../images/about/job2.jpg";
import JobImage3 from "../../images/about/job3.jpg";
import CommonServicePage from "./CommonServicePage";

const Jobs = () => {
  const pageContent = {
    title: "Job Site Scraping",
    subtitle: "The Hidden Candidates are In Data: Job Site Scraping",
    mainImage: JobImage1,
    content: {
      hero: [
        "Sharpen your recruitment strategy, discover hidden gems, and build a team of all-stars.",
      ],
      sections: [
        {
          title:
            "Here's how job site scraping empowers you to build a dream team:",
          image: JobImage2,
          list: [
            {
              title: "Candidate Compass",
              description:
                "Identify the top talent based on skills, experience, and location, regardless of their active job search status. This intel allows you to proactively reach out to ideal candidates, significantly increasing your chances of landing the perfect hire.",
            },
            {
              title: "Competitive Edge",
              description:
                "Analyze competitor job postings, salary ranges, and recruitment strategies. Gain valuable insights into the current job market trends and refine your recruitment offer to attract the best talent available. Stay ahead of the curve and become the employer of choice.",
            },
            {
              title: "Market Pulse",
              description:
                "Identify emerging skills and in-demand job titles before the competition does. Tailor your recruitment efforts to the ever-evolving needs of the workforce, ensuring you attract top talent with the most sought-after skillsets.",
            },
            {
              title: "Recruitment Regulations",
              description:
                "Track evolving labor laws and recruitment regulations. Stay informed and ensure your recruitment practices adhere to the latest standards, avoiding unnecessary legal roadblocks.",
            },
          ],
        },
        {
          title: "Fuel Your Recruitment Engine with Data-Driven Insights:",
          image: JobImage3,
          list: [
            {
              title: "Craft Compelling Job Postings",
              description:
                "Make data-driven decisions about job descriptions, benefits packages, and target keywords. Witness a surge in qualified applicants as your job postings resonate deeply with the ideal talent pool.",
            },
            {
              title: "Refine Your Targeting",
              description:
                "Identify the most effective job boards and online communities to reach your ideal candidates. No more wasted resources – your recruitment efforts land directly in front of the most relevant talent.",
            },
            {
              title: "Build a Talent Pipeline",
              description:
                "Proactively identify and nurture relationships with potential candidates. Data becomes your guide, allowing you to build a robust talent pipeline for future hiring needs.",
            },
          ],
          paragraphs: [
            "Clean, Structured Data: Your Recruitment Roadmap",
            "We deliver clean, structured data for your definitive roadmap to navigate the ever-expanding job market and discover a world of hidden talent.",
            "Say goodbye to endless scrolling and generic resumes. We transform complex job posting data into actionable insights, empowering you to make data-driven decisions that fuel your recruitment success.",
            "Ready to Build Your Dream Team?",
            "Contact The One Crawling Solution today and unlock the transformative power of job site scraping. Let’s bolster your company to the forefront of recruitment.",
          ],
        },
      ],
    },
    ctaText:
      "Stop searching blindly – start finding top talent with data-driven insights.",
  };

  return <CommonServicePage {...pageContent} />;
};

export default Jobs;
