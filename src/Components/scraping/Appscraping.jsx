/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Blog3,
  BlogSinglePostImage,
  Slide2,
} from "../../assets/images/imageAssets";
import "../../assets/css/appScraping.css";

// Content Configuration - Easy to maintain and manage
const appScrapingContent = {
  hero: {
    title: "What's Hiding Inside Your Favorite Apps? Let's Help You Find Out.",
    subtitle:
      "Mobile apps are like treasure chests. There're very powerful details hidden inside like how people use them, what they like, what competitors are doing and what trends are coming next. But who has that much time to sit and manually check every single app?",
    description:
      "At The One Crawling Solution, we offer app scraping services that do all the digging for you. And with our web data crawling and Data Extraction Services, you will get the insights that you need— fast, clean, and just how you want them. We're not just another data extraction company— we're the ones who help you turn app data into real decisions.",
  },

  whatIsAppScraping: {
    title: "So, What is App Scraping, Exactly?",
    description:
      "App scraping means pulling out useful data from apps automatically using custom-built crawlers. These crawlers are smart tools which we design to collect info like:",
    features: [
      "User reviews",
      "App features and updates",
      "Ratings and rankings",
      "Competitor pricing",
      "Download stats, and so much more...",
    ],
    note: "You don't have to do anything manually. We build the system, run it, and hand over the data that matters to you.",
  },

  whyMatters: {
    title: "But Wait— Why Does App Scraping Even Matter?",
    description:
      "Here's the thing. The data which is sitting inside those mobile apps of yours? It's not just numbers. It's gold. And if you know how to read it right, it can actually shift the way your business grows.",
    benefits: [
      "You will get to peek into what your competitors are up to",
      "You will finally understand what your users love and what they don't",
      "You can spot trends before they go viral",
      "You can figure out what's actually working for your app (and what's just noise)",
    ],
    conclusion:
      "At The One Crawling Solution, we don't just dump raw data on your table— we help you make sense of it. That is clean, clear, to-the-point insights you can actually use to move forward. And there's no clutter. Just clarity.",
  },

  process: {
    title: "How We Help You Scrape the Right App Data",
    subtitle:
      "Every business is made different. So, we don't believe in cookie-cutter solutions. This is the process we follow:",
    steps: [
      {
        title: "We Start with a Chat",
        description:
          "We ask you what you're looking for whether it's user behavior, competitor apps, pricing models, or something else. Then we plan a custom solution on the basis of your requirements.",
      },
      {
        title: "We Build a Custom App Scraper",
        description:
          "Our team creates crawlers made specifically for the apps or platforms that you're targeting. So, no matter how complex the data– we build it to work efficiently.",
      },
      {
        title: "We Clean the Data",
        description:
          "There's no messy spreadsheets here. You will get clean, organized data in the formats which you can actually use like in the format of Excel, CSV, or the dashboards.",
      },
      {
        title: "We Keep It Coming",
        description:
          "Do you need data every day? Every week? In real time? Done. We automate delivery and provide full support whenever you need it.",
      },
    ],
  },

  whatCanYouDo: {
    title: "Okay, But What Can You Actually Do with App Data?",
    activities: [
      { icon: "📲", text: "You can see what users are saying about your app" },
      { icon: "💡", text: "Learn how people interact with the features" },
      {
        icon: "📊",
        text: "You can compare pricing strategies across various competitors",
      },
      { icon: "🌍", text: "Explore the global markets and app trends" },
      {
        icon: "💬",
        text: "Improve your app using real-time reviews and feedback",
      },
    ],
  },

  dataTypes: {
    title: "What Kind of App Data Can You Get?",
    types: [
      "App store reviews and the ratings",
      "Feature comparisons",
      "Pricing and discount changes",
      "App ranking and performance tracking",
      "Competitor app strategies",
      "Engagement metrics across platforms",
    ],
  },

  faqs: [
    {
      question: "What do you mean by app scraping?",
      answer:
        "App scraping means collecting useful data like reviews, features rankings and the pricing from apps automatically using our smart crawlers that we build for you.",
    },
    {
      question: "Why should I care about app data?",
      answer:
        "You should care about app data because it shows what users love, what your competitors are doing and what's trending so that you can make better decisions for your app, right?",
    },
    {
      question: "Can I choose what kind of app data I want?",
      answer:
        "Yes, everything is custom-made. You tell us what you need and we'll build a solution that gives you only the data that matters to you.",
    },
  ],

  cta: {
    title: "Let's Turn App Data into Your Competitive Edge",
    description:
      "In today's mobile-first world, missing out on app data means missing out on business opportunities. Whether you're launching a new app, improving an old one, or watching competitors— you need app scraping.",
    conclusion:
      "At The One Crawling Solution, our data extraction services are built to make your life easier and your decisions sharper. So, let's do this.",
    buttonText:
      "Reach out to us today and get the insights your app needs to grow.",
  },
};

const AppScraping = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading">{appScrapingContent.hero.title}</h1>
              <p className="hero-subheading mt-3">
                {appScrapingContent.hero.subtitle}
              </p>
              <p className="hero-description mt-3">
                {appScrapingContent.hero.description}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={Slide2}
                alt="App Scraping Services"
                className="img-fluid hero-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What is App Scraping Section */}
      <div className="what-is-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={Blog3}
                alt="App Scraping Process"
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                {appScrapingContent.whatIsAppScraping.title}
              </h2>
              <p className="section-description">
                {appScrapingContent.whatIsAppScraping.description}
              </p>
              <ul className="features-list">
                {appScrapingContent.whatIsAppScraping.features.map(
                  (feature, index) => (
                    <li key={index} className="feature-item">
                      <i className="fas fa-check-circle feature-icon"></i>
                      {feature}
                    </li>
                  )
                )}
              </ul>
              <p className="section-note mt-3">
                {appScrapingContent.whatIsAppScraping.note}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why App Scraping Matters Section */}
      <div className="why-matters-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                {appScrapingContent.whyMatters.title}
              </h2>
              <p className="section-description">
                {appScrapingContent.whyMatters.description}
              </p>
              <ul className="benefits-list">
                {appScrapingContent.whyMatters.benefits.map(
                  (benefit, index) => (
                    <li key={index} className="benefit-item">
                      <i className="fas fa-star benefit-icon"></i>
                      {benefit}
                    </li>
                  )
                )}
              </ul>
              <p className="section-conclusion mt-4">
                {appScrapingContent.whyMatters.conclusion}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={BlogSinglePostImage}
                alt="App Data Insights"
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            {appScrapingContent.process.title}
          </h2>
          <p className="section-subtitle text-center mb-5">
            {appScrapingContent.process.subtitle}
          </p>
          <div className="row">
            {appScrapingContent.process.steps.map((step, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4">
                <div className="process-card">
                  <div className="process-number">{index + 1}</div>
                  <h4 className="process-title">{step.title}</h4>
                  <p className="process-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Can You Do Section */}
      <div className="activities-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            {appScrapingContent.whatCanYouDo.title}
          </h2>
          <div className="row">
            {appScrapingContent.whatCanYouDo.activities.map(
              (activity, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="activity-card">
                    <div className="activity-icon">{activity.icon}</div>
                    <p className="activity-text">{activity.text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Data Types Section */}
      <div className="data-types-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            {appScrapingContent.dataTypes.title}
          </h2>
          <div className="row">
            {appScrapingContent.dataTypes.types.map((type, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3">
                <div className="data-type-item">
                  <i className="fas fa-database data-type-icon"></i>
                  <span className="data-type-text">{type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Short FAQs</h2>
          <div className="row">
            {appScrapingContent.faqs.map((faq, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="faq-card">
                  <h5 className="faq-question">
                    <i className="fas fa-question-circle faq-icon"></i>
                    {faq.question}
                  </h5>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section py-5">
        <div className="container  text-center">
          {/* <div className="row align-items-center"> */}
          {/* <div className="col-lg-8"> */}
          <h2 className="cta-title">{appScrapingContent.cta.title}</h2>
          <p className="cta-description mt-3">
            {appScrapingContent.cta.description}
          </p>
          <p className="cta-conclusion mt-3">
            {appScrapingContent.cta.conclusion}
          </p>
          {/* </div> */}
          {/* <div className="col-lg-4 text-center"> */}
          <button className="cta-button btn btn-main">
            {appScrapingContent.cta.buttonText}
          </button>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default AppScraping;
