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
          title: "Our Data Collection Process",
          image: JobImage2,

          list: [
            {
              title: "Discovery & Customization",
              description:
                "We start by understanding your specific data needs. Are you looking for job postings, salary trends, company reviews, or candidate qualifications? We tailor our scraping approach to focus on the data that aligns perfectly with your recruitment or job market analysis goals.",
            },
            {
              title: "Target Source Mapping",
              description:
                "We identify key job sites, career portals, company websites, and recruitment platforms to create a comprehensive data source map. This ensures you receive high-quality, actionable insights from the most relevant sources for your needs.",
            },
            {
              title: "Advanced Data Extraction",
              description:
                "Using our advanced scraping tools, we extract real-time data from various job sites. From job listings and company profiles to salary benchmarks and job market trends, our tools gather the information you need to stay ahead in the job market.",
            },
          ],
        },
        {
          title: "Ensuring Quality and Timely Delivery",
          image: JobImage1,
          list: [
            {
              title: "Data Refinement",
              description:
                "Raw data is transformed into actionable insights through our meticulous cleaning and structuring process. We remove duplicates, irrelevant details, and format the data in your preferred structure (CSV, Excel, JSON, APIs) for seamless integration into your recruitment systems or analytics tools.",
            },
            {
              title: "Quality Control",
              description:
                "Before delivering the final dataset, our team conducts thorough quality checks to ensure data accuracy, completeness, and relevance. This guarantees that the insights you receive are not only timely but also reliable and ready to support your hiring strategies.",
            },
            {
              title: "Rapid Delivery",
              description:
                "Our automated, streamlined scraping process allows us to deliver job site data reports quickly—whether you need them daily, weekly, or in real-time. We pride ourselves on delivering data before deadlines, ensuring you always have the latest information to make informed hiring decisions.",
            },
            {
              title: "Post-Delivery Support",
              description:
                "The job market is dynamic, and so are your data needs. We provide ongoing support, including regular updates, maintenance, and fine-tuning of our scraping processes, ensuring you keep up with evolving job market trends.",
            },
          ],
        },
        {
          title:
            "Why Choose The One Crawling Solution for Job Site Data Scraping?",
          image: JobImage3,
          list: [
            {
              title: "Data That Drives Recruitment",
              description:
                "We don’t just collect raw data; we deliver insights that help you optimize your recruitment strategies, track job market trends, and make informed hiring decisions.",
            },
            {
              title: "Custom-Tailored Services",
              description:
                "Your recruitment objectives are unique, and so are your data needs. Our scraping services are fully customizable, focusing on the exact information that supports your goals.",
            },
            {
              title: "Stay Ahead of Market Trends",
              description:
                "With real-time, high-quality data, you can monitor job market trends, salary fluctuations, and candidate availability, enabling you to adjust your strategies proactively.",
            },
            {
              title: "100% Compliance",
              description:
                "We adhere strictly to all legal and ethical guidelines for data scraping, ensuring our process respects privacy laws, website terms of service, and data protection regulations.",
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
