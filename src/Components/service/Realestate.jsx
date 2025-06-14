import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/realEstate.css";

const RealEstate = () => {
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
      icon: "fa-search-dollar",
      title: "Pinpoint Investment Opportunities",
      description:
        "You’ll know exactly where the next underpriced gem is hiding. Whether it’s a fixer-upper in an up-and-coming area of a luxury condo that just dipped below market or your scraped data spills out in front of you.",
    },
    {
      icon: "fa-chart-line",
      title: "Analyze Market Trends Like a Pro",
      description:
        "You forget your gut feelings. With real estate data scraping services, you will be armed with cold, hard numbers— historical pricing, demand curves, neighbourhood growth rate. You should make your decisions backed by real insights, not by seeing some random blog predictions.",
    },
    {
      icon: "fa-user-secret",
      title: "Spy on Competitors",
      description:
        "Who’s listing what? At what price? For how long? How often do they update? Web scraping real estate data gives you a sneak peek into what your competitors are doing without stalking their websites manually like it’s 2010.",
    },
    {
      icon: "fa-bullseye",
      title:
        "Generate Quality Leads Are you also tired of cold calls that go nowhere? ",
      description:
        "You see with our data extraction tools, you can target the people who are actually buying, selling or renting— right now. So don’t waste time on dead-end prospects.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "We Figure Out What You Need",
      description:
        "Are you looking for rental data in Delhi? Or historical pricing in Mumbai’s suburbs? We’ll map out exactly what kind of web scraping real estate data you need and where to get it from.",
    },
    {
      number: "2",
      title: "Our Crawlers Get to Work",
      description:
        "Our bot browses just like a human, but it’s faster and more precise. They grab everything like photos, specs, prices, agent names, you just name it. And they will do it without triggering any alarms or getting blocked.",
    },
    {
      number: "3",
      title: "We Clean and Format Everything",
      description:
        "You don’t want the raw garbage. So we polish it for you and also clean it, remove duplicates, and structure it properly. You get usable data in your preferred format(Excel, CSV, JSON, API feed— whatever works best for you).",
    },
    {
      number: "4",
      title: "You Use It to Win",
      description:
        "We hand over the data to you. And you use it to plan, invest, market or scale— it’s your call. Either way, you’re doing it with an unfair advantage.",
    },
  ];

  const caseStudies = [
    {
      title: "The Investor Who Didn't Wait Around",
      description:
        "He wasn’t part of any big company. He’s just one individual who trusted real data more than his gut. He used our insights to track a sudden rise in listings around a new metro route. While everyone else was still figuring out what to do, he bought three flats quietly. And eight months later, he sold all three. And he walked away with a 40% return. That didn’t just happen because he got lucky. It happened because he moved with data, not guesses.",
      result: "40% Return",
    },
    {
      title: "The Developer Who Didn't Guess",
      description:
        "Most developers follow old assumptions. But this one didn’t. Instead of making assumptions, he looked at real-time data from listings, reviews, and buyer trends. They changed up their pricing and floor plans based on what people actually wanted. Result? The entire first tower sold out three months before completion.",
      result: "Sold Out Early",
    },
    {
      title: "The Property Manager Who Adapted",
      description:
        "Managing rentals is not just about filling rooms. It’s about knowing how and when to adjust. And it’s always about timing and pricing. This manager used weekly data to adjust rents based on the current trends. Even in the off-season, they stayed ahead. They maintained a 98% occupancy rate even in off-season months. And at the end of the year, their rental income had jumped by 20%. There’s no panic, just smart moves based on real-time data.",
      result: "20% Income Increase",
    },
  ];

  const benefits = [
    {
      icon: "fa-clock",
      title: "Instant Market Updates",
      description:
        "Know what's new, what's hot, and what's cooling off before anyone else.",
    },
    {
      icon: "fa-users",
      title: "Better Leads, Less Effort",
      description:
        "Access fresh buyer and seller information, so your outreach hits the mark.",
    },
    {
      icon: "fa-gem",
      title: "Sharper Investment Moves",
      description: "Spot the undervalued properties and trends early.",
    },
    {
      icon: "fa-save",
      title: "Save Time & Cut Costs",
      description: "Automate data collection and ditch manual grunt work.",
    },
    {
      icon: "fa-trophy",
      title: "Beat Competitors",
      description: "Track their listings and pricing strategies effortlessly.",
    },
  ];

  const faqs = [
    {
      question: "Is web scraping real estate data legal?",
      answer:
        "Yes, if done right. We scrape publicly available data and follow all the rules and regulations.",
    },
    {
      question: "Can you scrape data globally?",
      answer:
        "Absolutely. We adapt to local sites and languages, providing comprehensive global coverage.",
    },
    {
      question: "How often can I get updates?",
      answer:
        "Daily, weekly, monthly— whatever fits your schedule and business needs.",
    },
    {
      question: "Can you hook this data into my system?",
      answer:
        "Yes, we deliver in formats ready for your CRM or analytics tools - Excel, CSV, JSON, API feeds.",
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
                  Real Estate Data Scraping Services: The Edge You Need When
                  Everyone’s Competing for the Same Thing
                </h1>
                <p className="hero-subtitle">
                  In real estate, things move very fast. If you’re still relying
                  on old information or guessing, you’re already behind. It’s
                  not enough to just have listings but you will need data that’s
                  fresh, accurate, and easy to use. That’s exactly what our real
                  estate data scraping services give you.
                </p>
                <p className="hero-subtitle">
                  We bring the latest market information from multiple sources,
                  clean it up, and deliver it so you can make smart decisions,
                  fast. Whether you’re buying, selling, investing, or managing
                  properties, having the right data at the right time can change
                  everything.
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
                Why You Can't Afford to Ignore Real Estate Data Scraping
                Services
              </h2>
              <div className="section-content">
                <p>
                  Look, the real estate game is brutal. Prices shift, listings
                  vanish, and the competition never sleeps. If you're still
                  manually hunting for data, you're losing time and
                  opportunities. The truth is that you need a system that grabs
                  the data you need without the headache.
                </p>
                <p>
                  Real estate data scraping services do exactly that. They
                  extract crucial info from multiple websites, clean it up, and
                  serve it to you in a neat package.{" "}
                  <strong>
                    No guesswork, no late nights digging through listings.
                  </strong>{" "}
                  Just fast, reliable data that helps you make smarter moves.
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
              <h2 className="section-title">What You Can Do with This Data</h2>
              <p className="section-content">
                So now that you’ve got all this juicy data— what’s next? Here’s
                when the magic happens and this is where it starts to get fun.
              </p>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <i className={`fas ${feature.icon} feature-icon`}></i>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section" ref={addToRefs}>
        <div className="container">
          <h2 className="process-title">
            How It Works (And Why It’s Smarter Than Manual Search)
          </h2>
          <h2 className="process-content">
            You don’t need a degree in coding to use our real estate data
            scraping services. Here’s how the process works, from start to
            finish:{" "}
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
                Proof That the Right Data Changes Everything
              </h2>
              <p className="section-content">
                Do you still feel like this sounds too good to be true? Let’s
                just cut the theory and talk about what actually happened when
                people used our real estate data scraping services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {caseStudies.map((caseStudy, index) => (
                <div className="case-study" key={index}>
                  <h4 className="case-title">{caseStudy.title}</h4>
                  <p className="case-description">{caseStudy.description}</p>
                  <span className="case-result">{caseStudy.result}</span>
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
                Why You Need These Services Yesterday
              </h2>
              <p className="section-content">
                The market won’t ever wait. Prices will change by the hour, new
                properties will appear overnight, and your rivals will be
                watching your every single move. Therefore, using outdated or
                incomplete information is like trying to win a race while tied
                to a stone.
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <i className={`fas ${benefit.icon} benefit-icon`}></i>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {/* <section className="faq-section" ref={addToRefs}>
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
      </section> */}

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
                Real Estate Data Extraction That Means Business
              </h2>
              <p className="final-cta-description">
                You don’t have time to scroll through a hundred tabs hoping to
                find the right data. And you shouldn’t have to. We built this so
                you get what you actually need— clean, current, no-frills
                information that helps you make better moves without
                second-guessing yourself.
              </p>
              <p className="final-cta-description">
                You’ve got enough on your plate. Let us handle the data part, so
                that you can focus on what really matters— growing, building,
                deciding.
              </p>
              <button className="cta-button cta-secondary ">
                Reach out to The One Crawling Solution.
                {/* We’ll make sure your
                data stops slowing you down and starts working like it’s
                supposed to. */}
              </button>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}
        </div>
      </section>
    </>
  );
};
export default RealEstate;
