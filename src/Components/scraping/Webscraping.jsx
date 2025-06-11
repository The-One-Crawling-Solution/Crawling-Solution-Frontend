/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Blog1,
  Blog3,
  BlogSinglePostImage,
  Slide1,
} from "../../assets/images/imageAssets";
import "../../assets/css/webScraping.css";

const webscrapingContent = {
  hero: {
    title:
      "Web Scraping, Made Simple– So You Don't Have to Do the Heavy Lifting",
    subtitle1:
      "Let's be honest– the first thought that comes to our mind is that data is everywhere. Every website you visit has something useful, something that could help your business. But going through all of that manually? Like copying prices, reviews, listings, or competitor information by hand every single day? Sounds exhausting, right?",
    subtitle2:
      "That's exactly where web scraping comes in. And that's exactly what we do at The One Crawling Solution. We build smart systems that go online, collect the exact data you need, and bring it to you in a neat, ready-to-use format. No stress. No tech headaches. Just clean, powerful information delivered straight to you.",
    image: {
      src: Slide1,
      alt: "Web Scraping Solutions",
    },
  },

  whatIs: {
    title: "What Is Web Scraping (And Why It's Actually Pretty Cool)",
    description:
      "Just think of web scraping as a digital assistant that never sleeps. It's a process where we build custom tools (called crawlers) that visit websites, search for specific data like the product prices, reviews, listings, or trends and we bring it out for you automatically. This process is called Web Data Crawling.",
    highlight: {
      main: "It's fast, reliable, and 100% legal when done right",
      sub: "So instead of manually tracking 10 competitors, 5 platforms, or 100 listings… you just get one clean file with everything inside. Easy, right?",
    },
    image: {
      src: Blog1,
      alt: "Digital Assistant Concept",
    },
  },

  process: {
    title:
      "Built to Extract. Designed to Deliver– That's The One Crawling Solution.",
    subtitle:
      "We're not just another data extraction company offering the same old service. We listen to you and we understand your specific needs and then we build a custom solution that fits just right.",
    steps: [
      {
        number: "1",
        title: "We start by listening",
        description:
          "You tell us what data you're looking for. Maybe it's competitor pricing, or product listings, or market trends. Whatever it is– we will try to understand your business goals first.",
      },
      {
        number: "2",
        title: "We build custom crawlers",
        description:
          "Our crawlers are built from scratch just for you. They're smart, quiet, and powerful and designed to go to the websites you care about and bring only the data you want.",
      },
      {
        number: "3",
        title: "We clean and format everything",
        description:
          "You see raw data can be messy. We clean it, organize it, and turn it into neat Excel sheets, CSV files, or live dashboards. So, you don't just get data— you get data that makes sense.",
      },
      {
        number: "4",
        title: "We deliver it your way",
        description:
          "Need the data daily? Weekly? In real-time? We set up automatic deliveries for you to make sure you're always a step ahead with the latest info.",
      },
    ],
    conclusion:
      "That's how we provide simple, powerful data extraction services that actually help your business move faster.",
  },

  whyChoose: {
    title: "Why We're the Best Fit for You",
    intro:
      "We're proud to be known as the Best Web Scraping Company in Ahmedabad, and not just because we say it— it's because our clients trust us, and our work shows results.",
    features: [
      "We customize everything since we don't believe in one-size-fits-all",
      "We work with startups, SMEs, and big brands alike",
      "We keep things simple so no tech jargon, no confusion",
      "We're transparent, reliable, and always one call away",
      "We follow ethical and safe scraping methods so that your data is secure with us",
    ],
    image: {
      src: Blog3,
      alt: "Best Web Scraping Company",
    },
  },

  useCases: {
    title: "The Big Question: What Can You Do with Web Scraping?",
    cases: [
      {
        emoji: "📊",
        text: "Keep an eye on your competitor prices in real time",
      },
      {
        emoji: "🛍️",
        text: "Spot the product trends before they go viral",
      },
      {
        emoji: "🧠",
        text: "See what customers are saying across different sites",
      },
      {
        emoji: "📈",
        text: "Monitor job postings, financial data, or stock changes",
      },
      {
        emoji: "💡",
        text: "Stay one step ahead with the latest industry news",
      },
    ],
    conclusion:
      "You focus on growing your business and we'll do the hard work of digging up the data. Whenever you're ready, we're here.",
    image: {
      src: BlogSinglePostImage,
      alt: "Web Scraping Use Cases",
    },
  },

  faq: {
    title: "Short FAQs",
    questions: [
      {
        icon: "❓",
        question: "Is web scraping legal?",
        answer:
          "Yes it's completely legal. At The One Crawling Solution we make sure every project follows ethical scraping methods that are safe, secure and fully compliant.",
      },
      {
        icon: "❓",
        question: "Do I need to know tech to use this?",
        answer:
          "No, you don't need any tech background to use this because we take care of everything. You just tell us what type of data you need and we handle the rest of it.",
      },
      {
        icon: "❓",
        question: "What kind of data can you extract for me?",
        answer:
          "We can extract anything for you from product prices and reviews to the listings trends and customer feedback insights.",
      },
    ],
  },

  cta: {
    title: "Let's Get Started",
    subtitle:
      "Data doesn't have to be complicated. And with The One Crawling Solution, it becomes your business superpower.",
    description:
      "So, if you're looking for a team that makes web scraping easy, reliable, and modified just for you, we're here. Let's talk. Let's build. And let's make data work for you.",
    final:
      "Reach out to us today and see how we turn websites into opportunities for you.",
    buttonText: "Get Started",
  },
};

const Webscraping = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading text-color">
                {webscrapingContent.hero.title}
              </h1>
              <p className="hero-subheading mt-3">
                {webscrapingContent.hero.subtitle1}
              </p>
              <p className="hero-subheading mt-3">
                {webscrapingContent.hero.subtitle2}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={webscrapingContent.hero.image.src}
                alt={webscrapingContent.hero.image.alt}
                className="img-fluid hero-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* What Is Web Scraping Section */}
      <div className="what-is-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={webscrapingContent.whatIs.image.src}
                alt={webscrapingContent.whatIs.image.alt}
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-lg-6">
              <h3 className="section-title mb-4">
                {webscrapingContent.whatIs.title}
              </h3>
              <p className="section-description mb-4">
                {webscrapingContent.whatIs.description}
              </p>
              <div className="highlight-box">
                <p className="highlight-text">
                  <strong>{webscrapingContent.whatIs.highlight.main}</strong>{" "}
                  (and yes, we always do it right).
                </p>
                <p className="highlight-subtext">
                  {webscrapingContent.whatIs.highlight.sub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="process-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="main-title">{webscrapingContent.process.title}</h3>
            <p className="main-subtitle">
              {webscrapingContent.process.subtitle}
            </p>
          </div>

          <div className="row">
            {webscrapingContent.process.steps.map((step, index) => (
              <div key={index} className="col-lg-6 col-md-12 mb-4">
                <div className="process-step">
                  <div className="step-number">{step.number}</div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <p className="process-conclusion">
              {webscrapingContent.process.conclusion}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={webscrapingContent.whyChoose.image.src}
                alt={webscrapingContent.whyChoose.image.alt}
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="col-lg-6">
              <h4 className="section-title mb-4">
                {webscrapingContent.whyChoose.title}
              </h4>
              <p className="section-intro mb-4">
                {webscrapingContent.whyChoose.intro}
              </p>
              <div className="features-list">
                {webscrapingContent.whyChoose.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <i className="fas fa-check-circle feature-icon"></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="use-cases-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className="section-title mb-4">
                {webscrapingContent.useCases.title}
              </h4>
              <div className="use-cases-list">
                {webscrapingContent.useCases.cases.map((useCase, index) => (
                  <div key={index} className="use-case-item">
                    <span className="use-case-emoji">{useCase.emoji}</span>
                    <span>{useCase.text}</span>
                  </div>
                ))}
              </div>
              <p className="use-cases-conclusion mt-4">
                {webscrapingContent.useCases.conclusion}
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={webscrapingContent.useCases.image.src}
                alt={webscrapingContent.useCases.image.alt}
                className="img-fluid section-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section py-5 bg-light">
        <div className="container">
          <h3 className="section-title text-center mb-5">
            {webscrapingContent.faq.title}
          </h3>
          <div className="row">
            {webscrapingContent.faq.questions.map((faq, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="faq-card">
                  <div className="faq-question">
                    <span className="faq-icon">{faq.icon}</span>
                    <h5>{faq.question}</h5>
                  </div>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section py-5 text-center">
        <div className="container">
          <h3 className="cta-title">{webscrapingContent.cta.title}</h3>
          <p className="cta-subtitle">{webscrapingContent.cta.subtitle}</p>
          <p className="cta-text mt-3">{webscrapingContent.cta.description}</p>
          <p className="cta-final">{webscrapingContent.cta.final}</p>
          <button className="cta-button btn btn-main mt-4">
            {webscrapingContent.cta.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Webscraping;
