import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      title: "You Tell Us What You Need",
      description:
        "Are you looking to monitor the Flipkart vs Amazon prices for your product lines? Or track review sentiment on new launches? We’ll map it all out.",
    },
    {
      number: "2",
      title: "We Set Up the Crawlers for You",
      description:
        "There’s no stress of getting blocked. Our bots act like real users and they go in, bring out the exact data you need, from the platforms you care about.",
    },
    {
      number: "3",
      title: "We Clean and Format the Data",
      description:
        "We clean the data, remove the duplicates, and deliver it in formats that work: Excel, CSV, JSON, API— whatever format you choose.",
    },
    {
      number: "4",
      title: "You Use the Data to Winn",
      description:
        "We should always make smarter pricing decisions and launch products based on real demand. And watch out your competitors and stay two steps ahead of them.",
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
      question: "Is e-commerce data scraping legal?",
      answer:
        "Yes— if it’s done ethically. We scrape publicly available data without violating any terms or rules.",
    },
    {
      question: "Can I choose which platforms to scrape?",
      answer:
        "Absolutely. From Amazon and Flipkart to niche e-com sites, you pick and we build them.",
    },
    {
      question: "How often can I get data updates?",
      answer:
        "Your call. Real-time, hourly, daily, weekly— we adapt to what works for you.",
    },
    {
      question: "Will I need technical knowledge to use the data?",
      answer:
        "No, not at all. We deliver it in easy formats ready for Excel, dashboards, or your existing tools.",
    },
    {
      question: "What makes your service different?",
      answer:
        "We don’t just scrape. We understand why you need the data and help you use it to actually grow.",
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
                  E-commerce Data Scraping Services That kills the Guesswork and
                  Fuels the Growth
                </h1>
                <p className="hero-subtitle">
                  If you’re still making decisions based on hunches or outdated
                  dashboards, your business is flying blind. Today in the
                  fast-moving world of e-commerce, timing and accuracy aren’t
                  luxuries— they’re your survival tools. That’s where our
                  e-commerce data scraping services come in.
                </p>
                <p className="hero-subtitle">
                  We help you Extract Popular E-Commerce Website Data— like for
                  example think of Amazon pricing intelligence, Google Shopping
                  pricing intelligence, product trends, stock availability,
                  customer reviews, and everything in between. You don’t need to
                  scroll endlessly or jump across tabs. We will bring you
                  everything, clean and sorted.
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
                Data That Puts You in Control and not in the Confusion
              </h2>
              <div className="section-content">
                <p>
                  Let’s face it, your data is everywhere. But what good is it if
                  it’s scattered across 10 platforms, is it outdated, or just
                  plain messy? That’s where a solid e-commerce data scraping
                  service steps in. We don’t just bring out the raw information.
                  We deliver insights that actually help you Extract Popular
                  E-Commerce Website Data and do something useful with it.
                </p>
                <p>
                  Imagine waking up and opening your dashboard, and already
                  knowing that:
                  <ul>
                    <li>
                      {" "}
                      Where your competitors dropped prices overnight{" "}
                      <strong>(hello, Amazon pricing intelligence). </strong>
                    </li>
                    <li>
                      {" "}
                      Which products on Google Shopping suddenly spiked in
                      visibility.
                    </li>
                    <li>
                      {" "}
                      What customers arecomplaining about on a rival's new
                      product.
                    </li>
                    <li>
                      {" "}
                      Whether your inventory is running low before your
                      customers notice.
                    </li>
                  </ul>
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
                E-commerce Web Scraping for Smart Pricing
              </h2>
              <div className="section-content">
                <p>
                  If your pricing decisions are still based on the last week’s
                  trend or outdated spreadsheets, you’re losing money— period.
                  Our e-commerce web scraping solution lets you monitor
                  competitor prices in real-time across platforms like Amazon,
                  Flipkart, and Google Shopping.
                </p>
                <p>
                  Let’s say a top competitor drops their price by ₹50. You’ll
                  know instantly, not after the sale is lost.
                </p>
                <p>
                  <strong> 💡 Use case:</strong> A client in the electronics
                  space saved ₹4.6 lakh/month in over-discounting just by
                  adjusting to daily pricing fluctuations using our Google
                  Shopping pricing intelligence.
                  <br />
                  You can do the same. Because when your pricing is smart, your
                  profits are too.
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
            Let’s see How this Process Works (A.K.A. The Anti-Stress Process){" "}
          </h2>
          {/* <h2 className="process-content">
            You don’t need a degree in coding to use our real estate data
            scraping services. Here’s how the process works, from start to
            finish:{" "}
          </h2> */}
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
                The Kind of Data That Earns Its Keep
              </h2>
              <div className="section-content">
                <p>
                  Are you still wondering if e-commerce data scraping services
                  are worth it? Let’s talk about numbers.
                  {/* <br /> */}
                  When you use the right e-commerce web scraping service, you're
                  not spending— you’re investing in it.
                </p>
                <p>
                  Think about how much you spend on:
                  <ul style={{ fontWeight: "bold" }}>
                    <li>Wrong ad targeting</li>
                    <li>Poorly timed product launches</li>
                    <li>Inventory that doesn’t sell</li>
                    <li>Discounting just to stay in the race</li>
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
              <h2 className="faq-title">Quick FAQs</h2>
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
