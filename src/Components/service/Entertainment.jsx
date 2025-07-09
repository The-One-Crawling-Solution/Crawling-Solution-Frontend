import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import "../../assets/css/realEstate.css";

const Ecommerce = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: "fa-solid fa-people-carry-box",
      title: "Product Listings",
    },
    {
      icon: "fa-solid fa-percent",
      title: "Prices and Discounts",
    },
    {
      icon: "fa-solid fa-warehouse",
      title: "Inventory Status",
    },
    {
      icon: "fa-solid fa-star-half-stroke",
      title: "Customer Reviews and Ratings",
    },
    {
      icon: "fa-solid fa-truck",
      title: "Shipping and Delivery Info",
    },
    {
      icon: "fa-solid fa-head-side-virus",
      title: "Seller Insights",
    },
    {
      icon: "fa-solid fa-arrow-trend-up",
      title: "Market Trends and Competitor Strategies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Define clear objectives.",
      description:
        " The first step is to decide what is important for your project. And decide whether priority lies in identifying viewer drop-off, understanding device preferences, tracking genre trends, or measuring just the engagement on trailers.",
    },
    {
      number: "2",
      title: "Select relevant platforms.",
      description:
        "The next step for us is to prioritize the services that are most important to your plan, such as Netflix, Amazon Prime Video, Disney+ Hotstar, SonyLIV, and any regional apps with the target audiences.",
    },
    {
      number: "3",
      title: "Identify the data points to collect.",
      description:
        "Then, select data types such as titles, seasons, episodes, genre, cast metadata, viewer ratings, reviews, device type, region, and drop-off timestamps. We ensure that the final dataset meets your goals.",
    },
    {
      number: "4",
      title: "Pick appropriate tools and procedures.",
      description:
        "The next step is to choose tools to use that are already built for Netflix data scraping, entertainment media data scraping services, or to create custom scripts that fetch data from APIs or a structured page content.",
    },
    {
      number: "5",
      title: "Make sure the data structure is consistent.",
      description:
        "Next we’re going to store the collected information in a format that your analytics or business intelligence application can understand. Using comma-separated values, JSON, or databases with defined tables will keep data accuracy.",
    },
    {
      number: "6",
      title: "Create and edit the schedules.",
      description:
        "Now figure out if the data needs daily or weekly refreshes. So, we align the timeline with the content launches or seasons to maintain the relevance.",
    },
    {
      number: "7",
      title: "Define the analysis workflows.",
      description:
        "Make the dashboards and reports that display insights like trending content, drop-off points, average viewing time, and review sentiment. We share this info with our content, marketing, and strategy teams.",
    },
    {
      number: "8",
      title: "Review and finalize the results.",
      description:
        "We track the improvements in viewing, retention rates, or subscriber growth which allows us to adjust the objectives as needed and cycle through the continuous learning process.",
    },
  ];

  const caseStudies = [
    {
      title: "🚀 You can optimize the Pricing Instantly",
      description:
        " Use the Amazon pricing intelligence to dynamically adjust to the prices and stay competitive without slashing the margins unnecessarily.",
      // result: "40% Return",
    },
    {
      title: "📊 Monitor your competitors on a regular basis",
      description:
        "See what your competition is selling? How often do they restock? What’s their average review rating? We’ll get the answers for you.",
      // result: "Sold Out Early",
    },
    {
      title: "🎯 Launch Smarter Campaigns",
      description:
        "Always use the insights from the customer reviews to manage your messaging. And also launch ads that actually resonate with what buyers are saying.",
      // result: "20% Income Increase",
    },
    {
      title: "🛍️ Track Market Demand",
      description:
        "Notice the trends early and adapt to your product strategy before the wave hits.",
      // result: "20% Income Increase",
    },
    {
      title: "📦 Manage Inventory Better",
      description:
        "See what’s running low across the platforms and see what’s stuck on shelves. Always avoid stockouts or overbuying.",
      // result: "20% Income Increase",
    },
  ];

  const benefits = [
    {
      icon: "fa-clock",
      title: "✔ We handle anti-bot protections",
      description:
        "Our crawlers mimic human browsing so you don’t get blocked.",
    },
    {
      icon: "fa-users",
      title: "✔ We extract structured, usable data",
      description:
        "No broken rows. No duplicates. Just clean data ready to plug into your dashboards.",
    },
    {
      icon: "fa-gem",
      title: "✔ We monitor and maintain",
      description:
        "If a site updates its structure, our team updates the scrapers. You don’t lift a finger.",
    },
    {
      icon: "fa-save",
      title: "✔ Save Time & Cut Costs",
      description: "Automate data collection and ditch manual grunt work.",
    },
    {
      icon: "fa-trophy",
      title: "✔ We help you extract popular e-commerce website data",
      description:
        "Consistently from Amazon and Google Shopping to niche platforms, our bots know where and how to dig.",
    },
  ];

  const faqs = [
    {
      question: "What exactly do you mean by “OTT platform app data scraping?",
      answer:
        " It's the process of obtaining publicly available data from streaming platforms like Netflix or Disney+ Hotstar in order to understand what your audience views and how they react.",
    },
    {
      question: "Is OTT data scraping legal?",
      answer:
        "Yes, it is legal if it is done in an ethical way and by using publicly available data. At The One Crawling Solution, we adhere to all platform regulations and privacy policies while collecting only publicly available data.",
    },
    {
      question: "What information would I get from this data?",
      answer:
        "You’ll learn about the viewer drop-offs, content performance according to region or device, genre trends, and audience sentiment will all be covered.",
    },
    {
      question: "How will this help my business?",
      answer:
        "You make decisions based on behavior, not assumptions, and improve your content, timing, and engagement.",
    },
    {
      question: "Which platforms do you support?",
      answer:
        "We scrape data from Netflix, Prime Video, Disney+ Hotstar, SonyLIV, Hulu, and other popular OTT apps that you care about.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  Find Out What Your Audience Actually Watches Through OTT
                  Platform App Data Scraping
                </h1>
                <p className="hero-subtitle">
                  In today's streaming world, the options can feel limitless.
                  The OTT platforms like Netflix, Amazon Prime, Disney+ Hotstar,
                  and SonyLIV give us a plethora of options every hour. Audience
                  scrolls through options in the hopes of finding something that
                  resonates deeply with them. And the OTT platform app data
                  scraping grants that clarity. It reveals not only what content
                  those people watch but also how they will react at each
                  viewing point.
                </p>
                <p className="hero-subtitle">
                  This method removes the need for speculation. When content
                  creators access data on how many seconds viewers watch before
                  pausing or repeating a scene, they gain meaningful insight.
                  This information closes the gap between the creative intention
                  and audience response.
                </p>
                <a href="#contact" className="hero-cta">
                  <i className="fas fa-rocket"></i>
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                Data from Apps Speaks Louder Than Traditional Metrics
              </h2>
              <div className="section-content">
                <p>
                  When a show achieves a high number of view counts or likes,
                  these stats might seem impressive. But the reality implies
                  that true connection appears from the deeper patterns. The
                  streaming of media data scraping services collect detailed
                  information such as episode-level drop-off rates,
                  device-specific consumption data, regional adoption trends,
                  and trailer reaction specifics.
                </p>
                <p>
                  Each element defines a piece of the audience behavior puzzle.
                  And combining these observations creates a consistent picture
                  of what moves viewers in the moment and keeps them interested
                  over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                What Is E-commerce Data Scraping, anyway?
              </h2>
              <p className="section-content">
                Think of it like having an army of bots who never sleep. These
                bots crawl online in the marketplaces like Amazon, Flipkart,
                Myntra, eBay, Walmart, and more and it collects real-time data
                that matters to your business. But this isn’t just about
                collecting data. It’s about making it useful.
              </p>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <i className={`fas ${feature.icon} feature-icon`}></i>
                <h4 className="feature-title">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You Need This Section */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                Best Practices for Scraping OTT Platform Data
              </h2>
              <div className="section-content">
                <p>
                  Efficient OTT data projects depend on clear planning.
                  Successful teams follow these steps:
                </p>

                <ul>
                  <li>
                    They define the clear objectives, such as drop‑off insights,
                    genre preference, device stats, or regional viewership.
                  </li>
                  <li>
                    They choose reliable platforms to track, including Netflix,
                    Prime Video, Disney+ Hotstar, SonyLIV, and regional apps.
                  </li>
                  <li>
                    They extract complete metadata and engagement signals in a
                    structured and consistent format.
                  </li>
                  <li>
                    They link that data to the internal dashboards and analytics
                    platforms.
                  </li>
                  <li>
                    They update the pipeline regularly when viewer patterns
                    shift or new titles release.
                  </li>
                </ul>

                <p>
                  <strong> 💡 Use case:</strong> This system ensures that the
                  OTT platform app data scraping serves as a strategic advantage
                  rather than a mere technical exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" ref={addToRefs}>
        <div className="container">
          <h2 className="process-title">
            A Step-by-Step Roadmap to Launch OTT Platform App Data Scraping
          </h2>
          <h2 className="process-content">
            Successful OTT data initiatives follow a clear path. Thus, by taking
            these steps, any team can choose for OTT platform app data scraping
            by following these steps:
          </h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                What You Can Do with E-commerce Data Scraping{" "}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {caseStudies.map((caseStudy, index) => (
                <div className="case-study" key={index}>
                  <h4 className="case-title">{caseStudy.title}</h4>
                  <p className="case-description">{caseStudy.description}</p>
                  {/* <span className="case-result">{caseStudy.result}</span> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                Why Choose an E-commerce Data Extraction Company Instead of
                Doing It Yourself?
              </h2>
              <p className="section-content">
                Let’s be honest, you can try scraping websites on your own. But
                here’s the catch: Most e-commerce platforms are built to block
                bots. One wrong step and you’re IP banned, stuck in captchas, or
                worse— scraping through the junk data that you can’t even use.
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                {/* <i className={`fas ${benefit.icon} benefit-icon`}></i> */}
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
          <p
            className="section-content"
            style={{ marginTop: "30px", fontSize: "1.2rem" }}
          >
            <strong> 💡 Pro tip:</strong> If your in-house team is spending
            hours manually copying prices or reviews, you’re already behind. Let
            automation do the heavy lifting.
          </p>
        </div>
      </section>

      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                How to Integrate Scraping Insights into Teams
              </h2>
              <div className="section-content">
                <p>
                  Once teams collect data from entertainment media data scraping
                  services, results must guide daily work:
                </p>
                <p>
                  Think about how much you spend on:
                  <ul style={{ fontWeight: "bold" }}>
                    <li>
                      Content creators refer to the dashboards to analyse
                      episode length and story beats.
                    </li>
                    <li>
                      Marketing teams modify the promo timing in response to
                      shifts in engagement and trends in trailer drop-off.
                    </li>
                    <li>
                      Analysts correlate scraped insights with subscriber data
                      to determine value.
                    </li>
                    <li>
                      Platform leaders review cross-platform patterns to inform
                      acquisition and licensing decisions.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faq-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="faq-title">
                Quick FAQs on OTT Platform App Data Scraping
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <h4 className="faq-question">
                    <span className="faq-icon">❓</span>
                    {faq.question}
                  </h4>
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="final-cta-title">
                This Is the Data Your Business Deserves{" "}
              </h2>
              <p className="final-cta-description">
                You’ve got enough on your plate already— inventory, logistics,
                marketing and customer service. Let us take care of the data so
                that you can focus on your growth. Because in e-commerce,
                real-time insights aren’t optional. They’re what separate
                leaders from laggards.
              </p>
              <p className="final-cta-description">
                Reach out to us ‘The One Crawling Solution’ and let’s get your
                data working for you— not the other way around.
              </p>
              <button className="cta-button cta-secondary ">
                Reach out to The One Crawling Solution.
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Ecommerce;
