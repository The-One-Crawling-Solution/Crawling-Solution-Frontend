import { Link } from "react-router-dom";
import "../assets/css/about.css";

const AboutComponent = () => {
  const downloadPortfolio = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb/view?";
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "company-portfolio.pdf";
    anchor.click();
  };

  const features = [
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Ease the Complications",
      desc: "Tell us what you need, and we'll build the best scraper for it. No confusion, just clean data.",
    },
    {
      icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364",
      title: "Available Even After Delivery!",
      desc: "We don't disappear after delivery. Our team ensures your scrapers keep running smoothly.",
    },
    {
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10",
      title: "100% Accurate",
      desc: "We deliver exactly what you ask for. Clean, accurate results—built for reliability, not rework.",
    },
    {
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      title: "Rules & Guidelines Followed",
      desc: "Every solution follows compliance, privacy and data security practices. Ethical data extraction guaranteed.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Visual */}
            <div className="hero-visual">
              <div className="visual-content">
                <div className="icon-wrapper">
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"></path>
                  </svg>
                </div>
                <h3 className="visual-title">Best Web Scraping</h3>
                <p className="visual-subtitle">Company in Ahmedabad</p>
              </div>
            </div>

            {/* Content */}
            <div className="hero-content">
              <h2 className="hero-title">
                Data extraction that starts with{" "}
                <span className="highlight">why</span>, not just how
              </h2>
              <p className="hero-subtitle">
                We Don’t Just Collect Data. We Are Here to Help You Use It.
              </p>

              <div className="content-sections">
                <div className="content-item">
                  {/* <span className="badge">Who We Are</span> */}

                  <h4 className="content-title badge">Who We Are</h4>
                  <p className="content-text">
                    We’re a passionate team of data specialists,
                    problem-solvers, and tech builders. We’re known as the Best
                    Web Scraping Company in Ahmedabad{" "}
                    <span className="highlight">
                      "The One Crawling Solution"
                    </span>
                    . We believe that good data should never be out of reach or
                    buried in the clutter. That’s why we offer reliable,
                    custom-built web scraping services and data extraction
                    services that are easy to use, efficient and built to match
                    your unique needs.
                  </p>
                </div>
                <div className="content-item">
                  {/* <h4 className="content-title">
                    Custom-Built Solutions Just For You
                  </h4> */}
                  <p className="content-text">
                    We don’t say “one-size-fits-all”. We create the scrapers
                    that are made just for you because your business goals are
                    specific and your data tools should be too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon mission-icon">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Our Mission</h3>
              </div>
              <p className="card-text">
                We help your businesses access clean, structured, and reliable
                data and that too without the stress. So, as a trusted Data
                Extraction Company, we simplify the automation so that you can
                spend less time on manual work and more on making smart
                decisions. And with our data extraction services and web data
                crawling, we deliver the right data at the right time— helping
                you boost efficiency and cut costs.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon vision-icon">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Our Vision</h3>
              </div>
              <p className="card-text">
                To be the go-to name for anyone looking for smart, ethical and
                effective web scraping services. We want to help businesses
                across the globe open the full power of data extraction and
                actually understand it. Our vision is a world where companies of
                all sizes can use data-driven insights without the typical
                technical headaches or complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="trust-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Businesses Trust Us</h2>
            <p className="section-subtitle">
              Tell us what you need, and we’ll build the best scraper for it.
              Our web scraping services are made to simplify your workflow— no
              confusion, it’s just clean data.
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-icon">
                  <svg
                    className="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Counter Start */}
      <section className="section counter bg-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="fas fa-check color-one text-md"></i>{" "}
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">50</span> +
                </h3>
                <p className="text-white-50">Project Done</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="fas fa-flag color-one text-md"></i>{" "}
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">125</span>
                </h3>
                <p className="text-white-50">User Worldwide</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="counter-item text-center mb-5 mb-lg-0">
                <i className="fas fa-globe color-one text-md"></i>{" "}
                <h3 className="mt-2 mb-0 text-white">
                  <span className="counter-stat font-weight-bold">39</span>
                </h3>
                <p className="text-white-50">Available Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
