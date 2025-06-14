import React, { useRef, useEffect } from "react";
import "../../assets/css/healthCare.css";
// import "./healthCare.css";

const HealthcareScrapingPage = () => {
  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const features = [
    { icon: "fa-user-md", title: "Patient Information Analysis" },
    { icon: "fa-pills", title: "Treatment Details Tracking" },
    { icon: "fa-chart-line", title: "Market Trends Monitoring" },
    { icon: "fa-file-medical", title: "Policy Updates Tracking" },
    { icon: "fa-hospital", title: "Hospital Data Integration" },
    { icon: "fa-shield-alt", title: "Insurance Data Processing" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understanding Your Needs",
      description:
        "We talk to you to know exactly what information you require - drug prices, hospital reviews, insurance plans, or research data.",
    },
    {
      number: "02",
      title: "Choosing Correct Sources",
      description:
        "We go to the most trusted healthcare sites, insurance portals, and pharma databases that give quality data.",
    },
    {
      number: "03",
      title: "Automatic Data Collection",
      description:
        "We use smart tools to pull real-time data from all the right places, running in the background for fresh updates.",
    },
    {
      number: "04",
      title: "Data Cleaning & Organization",
      description:
        "Information is cleaned, duplicates removed, errors fixed, and formatted for your systems.",
    },
    {
      number: "05",
      title: "Timely Delivery",
      description:
        "Whether daily, weekly or monthly reports, we ensure data reaches you when you need it.",
    },
  ];

  const useCases = [
    {
      title: "Track Patient Demographics",
      description:
        "Hospitals use data to track patient age, location, and health conditions to know where care is needed most.",
    },
    {
      title: "Drug Pricing Trends",
      description:
        "Pharma companies watch pricing changes across competitors to adjust their own strategies effectively.",
    },
    {
      title: "Treatment Protocols",
      description:
        "Clinics analyze which treatments work best and what new therapies are gaining traction in the market.",
    },
    {
      title: "Insurance Claim Patterns",
      description:
        "Insurers identify unusual claims early to prevent fraud and control costs efficiently.",
    },
    {
      title: "Regulatory Changes",
      description:
        "Businesses monitor evolving healthcare policies to ensure compliance and avoid penalties.",
    },
    {
      title: "Recruitment Planning",
      description:
        "Hospitals identify what specialists are in demand in different regions for smart hiring decisions.",
    },
  ];

  const benefits = [
    {
      title: "Faster Decisions",
      description:
        "Data comes to you quickly, so there's no waiting around for reports.",
    },
    {
      title: "Cost Savings",
      description:
        "Avoid overstocking or unnecessary treatments by knowing exactly what's needed.",
    },
    {
      title: "Better Patient Care",
      description:
        "Find patterns early and adjust treatments that make care more effective.",
    },
    {
      title: "Market Edge",
      description:
        "Understand competitors, discover trends, and find opportunities before others do.",
    },
    {
      title: "Stay Updated",
      description:
        "Healthcare rules keep changing - stay compliant without headaches.",
    },
    {
      title: "Real-time Insights",
      description:
        "Get instant access to critical information as it happens in the healthcare market.",
    },
  ];

  const faqs = [
    {
      question: "Is it legal to do this type of scraping?",
      answer:
        "Yes, definitely it's legal. As long as it respects privacy laws and follows ethical rules, we ensure compliance.",
    },
    {
      question: "What kind of data can I get from it?",
      answer:
        "Patient demographics, drug pricing, policy updates, treatment trends - you get exactly what matters to you.",
    },
    {
      question: "Will it work with the tools that I already use?",
      answer:
        "Yes. We send data in the format you need - Excel, CSV, API - you name it.",
    },
    {
      question: "How often does the data get refreshed?",
      answer:
        "It's always being updated in the background, so you're working with the latest insights.",
    },
    {
      question: "Will this help me since I'm a small healthcare provider?",
      answer:
        "Yes, it will help. You don't have to be a big brand to benefit. Even small clinics can use healthcare data extraction for sharper decisions.",
    },
  ];

  return (
    <div className="healthcare-scraping-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <div className="hero-content">
                <h1 className="hero-title">
                  Smart Scraping for Real Healthcare Needs
                </h1>
                <p className="hero-subtitle">
                  In the healthcare industry, everything moves fast - new
                  treatments, shifting patient needs, changing policies. Keeping
                  up without the right information isn't just hard, it can cost
                  lives. Our healthcare data scraping gives you real-time access
                  to critical information like patient data, treatment updates,
                  and pricing changes.
                </p>
                <p className="hero-subtitle">
                  We help you extract vital healthcare data - drug prices,
                  hospital ratings, insurance details, treatment protocols.
                  Instead of spending hours digging through records, use our
                  smart tools to automate the process and get exactly what you
                  need.
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

      {/* What Healthcare Data Extraction Means */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                What Healthcare Data Extraction Means
              </h2>
              <div className="section-content">
                <p>
                  Healthcare data extraction means gathering useful information
                  from many sources like websites, reports, databases and
                  turning it into something easy to use. Instead of spending
                  hours digging through records, our smart tools automate the
                  process really fast and collect exactly what you need.
                </p>
                <p>
                  From tracking drug prices to hospital ratings, or insurance
                  details that manually takes forever and risks missing key
                  information. With healthcare data extraction and analysis, you
                  get clean, organized data that helps you understand the market
                  and make better decisions quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                Key Areas Covered by Healthcare Data Extraction
              </h2>
              <p className="section-content">
                Healthcare is a huge world, so what exactly do we focus on when
                it comes to healthcare data scraping and extraction?
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

      {/* How It Works */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                How Healthcare Data Scraping Turns Raw Data Into Insights
              </h2>
              <div className="section-content">
                <p>
                  Data collection is just the start. Raw data alone doesn't help
                  until it's cleaned and turned into something meaningful. After
                  healthcare data scraping and extraction, data goes through
                  careful cleaning and structuring. Duplicates get removed,
                  errors are fixed, and everything is formatted to fit your
                  systems like Excel, CSV, or API feeds.
                </p>
                <p>
                  This is the core of healthcare data extraction and analysis -
                  turning raw information into clear understanding that you can
                  act on. Whether you want to improve patient care, control
                  costs, or spot new opportunities, smart data makes all the
                  difference.
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
            How Does Healthcare Data Scraping Work? Step-by-Step Process
          </h2>
          <p className="process-subtitle">
            No complicated jargon here. Let's see how this process works:
          </p>
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

      {/* Use Cases Section */}
      <section className="use-cases-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-title">
                Healthcare Data Extraction Use Cases & Practical Examples
              </h2>
              <p className="section-content">
                Let's look at how this actually works in real life where
                healthcare data extraction quietly changes everything:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {useCases.map((useCase, index) => (
                <div className="use-case-card" key={index}>
                  <h4 className="use-case-title">{useCase.title}</h4>
                  <p className="use-case-description">{useCase.description}</p>
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
                What You Gain: Advantages of Healthcare Data Scraping
              </h2>
              <p className="section-content">
                Here's what makes investing in healthcare data extraction worth
                it:
              </p>
            </div>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="content-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                Who Can Benefit from Healthcare Data Extraction?
              </h2>
              <div className="section-content">
                <p>
                  This data extraction isn't just for big hospitals or pharma
                  giants. The power of healthcare data extraction reaches far
                  and wide:
                </p>
                <div className="beneficiaries-grid">
                  <div className="beneficiary-item">
                    <h4>Hospitals & Clinics</h4>
                    <p>
                      Use data to improve patient care, manage resources better,
                      and see how they're doing compared to others.
                    </p>
                  </div>
                  <div className="beneficiary-item">
                    <h4>Pharmaceutical Firms</h4>
                    <p>
                      Track drug availability, keep up with price changes and
                      stay updated on clinical trial results.
                    </p>
                  </div>
                  <div className="beneficiary-item">
                    <h4>Health Insurers</h4>
                    <p>
                      Reduce risks, catch fraud early, and make the overall
                      experience smoother for customers.
                    </p>
                  </div>
                  <div className="beneficiary-item">
                    <h4>Medical Research</h4>
                    <p>
                      Access large datasets that help find new insights and back
                      findings with real proof.
                    </p>
                  </div>
                  <div className="beneficiary-item">
                    <h4>Healthcare Tech Companies</h4>
                    <p>
                      Build smarter apps and tools that actually solve
                      real-world problems.
                    </p>
                  </div>
                  <div className="beneficiary-item">
                    <h4>Medical Equipment Providers</h4>
                    <p>
                      Track which devices are trending in hospitals and identify
                      market gaps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="content-section integration-section" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="section-title">
                How Our Healthcare Data Extraction Services Integrate With Your
                Workflow
              </h2>
              <div className="section-content">
                <p>
                  We don't ask you to change your systems. We fit into them.
                  Already using Excel? We format your scraped data into clean
                  spreadsheets. Have a dashboard system? We'll connect through
                  API feeds. Need custom alerts? We'll send automated summaries
                  on whatever schedule suits you.
                </p>
                <div className="integration-features">
                  <div className="integration-item">
                    <i className="fas fa-file-excel"></i>
                    <span>Organized dashboards</span>
                  </div>
                  <div className="integration-item">
                    <i className="fas fa-table"></i>
                    <span>Easy-to-read tables</span>
                  </div>
                  <div className="integration-item">
                    <i className="fas fa-download"></i>
                    <span>Instant exports to CSV, Excel, JSON</span>
                  </div>
                  <div className="integration-item">
                    <i className="fas fa-plug"></i>
                    <span>Plug-and-play APIs</span>
                  </div>
                </div>
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

      {/* Final CTA */}
      <section className="final-cta" ref={addToRefs}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="final-cta-title">
                Make Healthcare Data Extraction Work for Your Healthcare
                Business
              </h2>
              <p className="final-cta-description">
                In today's world, information isn't just power - it's for
                survival. Healthcare data scraping and extraction gives you the
                insight you need to stay ahead, improve patient care, and grow
                your business with confidence.
              </p>
              <p className="final-cta-description">
                Don't let important data slip through the cracks. The One
                Crawling Solution delivers clean, reliable healthcare data that
                helps you understand the market, anticipate changes, and make
                smarter moves fast.
              </p>
              <button className="cta-button">
                <i className="fas fa-phone"></i>
                Ready to Get Started? Reach Out Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareScrapingPage;
