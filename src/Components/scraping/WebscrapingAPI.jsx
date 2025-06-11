/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Blog3,
  BlogSinglePostImage,
  Slide2,
} from "../../assets/images/imageAssets";
import "../../assets/css/webAPIScraping.css";

// Content Configuration - Easy to maintain and manage
const webScrapingApisContent = {
  hero: {
    title: "Make Data Work for You— Not Against You",
    subtitle: "(How Our Web Scraping APIs Save Time, Effort, and Headaches)",
    description:
      "Let's face it— like collecting data from the web sounds simple until you try doing it at scale. That's where our Web Scraping APIs step in. You think of them as your behind-the-scenes power tools which quietly pull in clean, organized data while you focus on what really matters: running your business.",
    conclusion:
      "At The One Crawling Solution, we build smart, scalable Web Scraping APIs that help you collect the exact data that you need from any website. Whether it's product prices, user reviews, job listings, or social media chatter— we help you extract it automatically, securely, and on your terms.",
  },

  whatCanYouDo: {
    title: "So, What Can You Actually Do with Web Scraping APIs?",
    activities: [
      {
        icon: "📊",
        text: "Keep an eye on competitor prices– without lifting a finger",
      },
      {
        icon: "🛍️",
        text: "Monitor the products, reviews, or listings across tons of websites",
      },
      {
        icon: "💬",
        text: "Stay updated on what people are saying about your brand (or your industry)",
      },
      {
        icon: "📈",
        text: "Automatically collect data for your research, strategy, or reports",
      },
      {
        icon: "📦",
        text: "Plug fresh, real-time info straight into your app, dashboard, or tool",
      },
    ],
    conclusion:
      "Basically, you stop guessing and start making decisions based on actual, live web data. Simple, right?",
  },

  whyEasy: {
    title: "Why Our APIs Make Data Collection So Easy",
    description:
      "You don't have to be a tech wizard to use our Web Scraping APIs. We built them to be developer-friendly but non-techie approved.",
    subtitle: "Here's how they help you:",
    features: [
      {
        icon: "✨",
        title: "Plug and Play",
        description: "It's easy to integrate into your existing systems.",
      },
      {
        icon: "✨",
        title: "Live Data, always",
        description:
          "You get real-time updates meaning you never miss out on changes.",
      },
      {
        icon: "✨",
        title: "Custom to You",
        description:
          "Do you want data from 10 websites? Or 10,000? We scale with you.",
      },
      {
        icon: "✨",
        title: "Safe & Reliable",
        description:
          "We follow ethical data extraction practices with top-tier security.",
      },
    ],
  },

  builtForBusiness: {
    title: "Built For Real Businesses Like Yours",
    description:
      "You see from eCommerce brands and startups to market researchers and SaaS tools— our data extraction services are very much used by businesses across industries who don't have the time to manually collect or clean web data.",
    conclusion:
      "And since every business has unique needs, we never offer a one-size-fits-all solution. You tell us what kind of data you need—and we make it happen for you, clean and fast.",
  },

  whyWorkWithUs: {
    title: "Why Work with The One Crawling Solution?",
    subtitle: "Here's what makes us stand out:",
    points: [
      "We're not just here to code– we're here to solve. We get what your business actually needs, not just what looks good in a script.",
      "The question is– Speed and accuracy? Always. Our crawlers are built to deliver the right data, right when you need it.",
      "We respect your privacy like it's our own. It's fully compliant, secure scraping and no shortcuts.",
      "It's built in such a way to scale. Whether you're just starting out or growing fast, our tech grows with you.",
    ],
    note: "And yes— we're friendly, too.",
  },

  faqs: [
    {
      question: "What are Web Scraping APIs?",
      answer:
        "They're the smart tools that collect real-time data from the websites automatically so you don't have to do it manually.",
    },
    {
      question: "Do I need to be a developer to use this?",
      answer:
        "No, our APIs are easy to plug into any system and we help set up everything up so it just works.",
    },
    {
      question: "What kind of data can your API collect?",
      answer:
        "Our APIs can collect anything from product prices and job listings to reviews, social media mentions and more depending on what your business needs.",
    },
  ],

  finalCta: {
    title: "Let's Make Your Data Journey Simple",
    description:
      "If you've ever struggled with messy datasets, broken scrapers, or stale info– the answer to this is you're not alone. That's exactly why we built our Web Scraping APIs: to help businesses like yours stop wasting time and start making smarter decisions with real-time, reliable web data.",
    conclusion:
      "We're not here to overcomplicate things. We're here to give you clarity through our clean, custom data that speaks directly to your business goals.",
  },

  cta: {
    title: "Let's Talk?",
    description:
      "If you're ready to finally automate your data collection and without the stress, just reach out to us. We'd love to help you build something that actually makes your life easier.",
    buttonText: "Let's turn your data into action.",
  },
};

const WebScrapingAPIs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading">
                {webScrapingApisContent.hero.title}
              </h1>
              <h2 className="hero-subtitle">
                {webScrapingApisContent.hero.subtitle}
              </h2>
              <p className="hero-description mt-3">
                {webScrapingApisContent.hero.description}
              </p>
              <p className="hero-conclusion mt-3">
                {webScrapingApisContent.hero.conclusion}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={Slide2}
                alt="Web Scraping APIs Services"
                className="img-fluid hero-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What Can You Do Section */}
      <div className="activities-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            {webScrapingApisContent.whatCanYouDo.title}
          </h2>
          <div className="row">
            {webScrapingApisContent.whatCanYouDo.activities.map(
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
          <div className="text-center mt-4">
            <p className="conclusion-text">
              {webScrapingApisContent.whatCanYouDo.conclusion}
            </p>
          </div>
        </div>
      </div>

      {/* Why Easy Section */}
      <div className="why-easy-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={Blog3}
                alt="Easy Web Scraping APIs"
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">
                {webScrapingApisContent.whyEasy.title}
              </h2>
              <p className="section-description">
                {webScrapingApisContent.whyEasy.description}
              </p>
              <p className="section-subtitle">
                {webScrapingApisContent.whyEasy.subtitle}
              </p>
              <div className="features-grid">
                {webScrapingApisContent.whyEasy.features.map(
                  (feature, index) => (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-content">
                        <h5 className="feature-title">{feature.title}</h5>
                        <p className="feature-description">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Built for Business Section */}
      <div className="business-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">
                {webScrapingApisContent.builtForBusiness.title}
              </h2>
              <p className="section-description">
                {webScrapingApisContent.builtForBusiness.description}
              </p>
              <p className="section-conclusion">
                {webScrapingApisContent.builtForBusiness.conclusion}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={BlogSinglePostImage}
                alt="Business Web Scraping Solutions"
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="why-work-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            {webScrapingApisContent.whyWorkWithUs.title}
          </h2>
          <p className="section-subtitle text-center mb-5">
            {webScrapingApisContent.whyWorkWithUs.subtitle}
          </p>
          <div className="row">
            {webScrapingApisContent.whyWorkWithUs.points.map((point, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="work-point-card">
                  <div className="point-number">{index + 1}</div>
                  <p className="point-text">{point}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="friendly-note">
              {webScrapingApisContent.whyWorkWithUs.note}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Short FAQs</h2>
          <div className="row">
            {webScrapingApisContent.faqs.map((faq, index) => (
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

      {/* Final CTA Section */}
      <div className="final-cta-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="final-cta-title">
                {webScrapingApisContent.finalCta.title}
              </h2>
              <p className="final-cta-description mt-3">
                {webScrapingApisContent.finalCta.description}
              </p>
              <p className="final-cta-conclusion mt-3">
                {webScrapingApisContent.finalCta.conclusion}
              </p>
            </div>
            <div className="col-lg-4 text-center">
              <div className="final-cta-visual">
                <i className="fas fa-chart-line cta-visual-icon"></i>
                <p className="cta-visual-text">Clean Data, Clear Decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section py-5">
        <div className="container text-center">
          <h2 className="cta-title">{webScrapingApisContent.cta.title}</h2>
          <p className="cta-description mt-3">
            {webScrapingApisContent.cta.description}
          </p>
          <button className="cta-button btn btn-main mt-4">
            {webScrapingApisContent.cta.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default WebScrapingAPIs;
