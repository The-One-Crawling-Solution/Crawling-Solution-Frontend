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
              <span className="badge">Who We Are</span>
              <h2 className="hero-title">
                Data extraction that starts with{" "}
                <span className="highlight">why</span>, not just how
              </h2>
              <p className="hero-subtitle">
                We Don't Just Collect Data. We Help You Use It.
              </p>

              <div className="content-sections">
                <div className="content-item">
                  <h4 className="content-title">
                    We're Not Just Another Data Extraction Company
                  </h4>
                  <p className="content-text">
                    We're the people who help you find exact data and make it
                    work for your business. Known as{" "}
                    <strong>"The One Crawling Solution"</strong>.
                  </p>
                </div>
                <div className="content-item">
                  <h4 className="content-title">
                    Custom-Built Solutions Just For You
                  </h4>
                  <p className="content-text">
                    We don't do "one-size-fits-all". We create scrapers made
                    just for you because your business goals are specific.
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
                Help businesses access clean, structured, reliable data without
                stress. We simplify automation so you spend less time on manual
                work and more on smart decisions.
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
                To be the go-to name for smart, ethical web scraping services.
                Help businesses unlock data extraction power without technical
                headaches.
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
              Delivering exceptional results that exceed expectations
            </p>
          </div>

          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
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

      <section className="section pt-0">
        <div className="container">
          <div className="row flex">
            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link
                to="/website-data-scraping-services"
                className="scrape-card card-1"
              >
                <div className="card-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">01.</span>Enterprise - Scale Web
                  Crawling
                </h3>
                <p>
                  We know you have too many operations to handle. So we free you
                  from all the need to install hardware or software to get the
                  data. Just get the data delivered and assess it as much as you
                  want.
                </p>
              </Link>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link
                to="/mobile-app-data-scraping-services"
                className="scrape-card card-2"
              >
                <div className="card-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">02.</span> Mobile App Scraping
                </h3>
                <p>
                  Mobile apps are like a benchmark nowadays. Every brand is
                  looking to have an application of its own. But how do you make
                  sure that happens so? Get the right kind of data with rightful
                  experts at The One Crawling Solutions.
                </p>
              </Link>
            </div>

            {/* CARD 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link
                to="/web-scarping-api-services"
                className="scrape-card card-3"
              >
                <div className="card-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">03.</span> Web Scraping APIs
                </h3>
                <p>
                  One size fits all may be for some other industry. Your brand
                  needs a fresh and customized approach when it comes to getting
                  the data you need. We will provide you customized web scraping
                  APIs so you can breathe in peace.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="portfolio-download-container py-5">
        <div className="container text-center">
          {/* Hero Section */}
          <h1 className="portfolio-heading">
            Empower Your Business with Our Expertise
          </h1>
          <p className="portfolio-description mt-4">
            Explore our comprehensive portfolio showcasing a track record of
            innovation, excellence, and commitment to delivering cutting-edge
            solutions across various industries.
          </p>

          {/* Key Highlights Section */}
          <div className="portfolio-highlights mt-5">
            <h3 className="highlights-heading">Why Partner with Us?</h3>
            <div className="row mt-4">
              <div className="col-md-4">
                <i
                  className="fas fa-cogs fa-3x mb-3"
                  style={{ color: "rgb(247, 87, 87)" }}
                ></i>
                <h4 className="highlight-title">Innovative Solutions</h4>
                <p className="highlight-description">
                  Leverage the latest technologies and industry best practices
                  to stay ahead of the curve.
                </p>
              </div>
              <div className="col-md-4">
                <i
                  className="fas fa-users fa-3x mb-3"
                  style={{ color: "rgb(247, 87, 87)" }}
                ></i>
                <h4 className="highlight-title">Client-Centric Approach</h4>
                <p className="highlight-description">
                  We prioritize your goals, ensuring that our solutions align
                  perfectly with your business needs.
                </p>
              </div>
              <div className="col-md-4">
                <i
                  className="fas fa-chart-line fa-3x mb-3"
                  style={{ color: "rgb(247, 87, 87)" }}
                ></i>
                <h4 className="highlight-title">Proven Success</h4>
                <p className="highlight-description">
                  A strong portfolio of successfully delivered projects across
                  multiple industries speaks for itself.
                </p>
              </div>
            </div>
          </div>

          {/* Services Section */}
          {/* <div className="portfolio-services mt-3">
           <h3 className="services-heading">Our Core Services</h3>
           <div className="row mt-4">
             <div className="col-md-6">
               <h4 className="service-title">Consulting & Strategy</h4>
               <p className="service-description">
                 From market analysis to tailored strategies, we guide your
                 business to success with expert insights.
               </p>
             </div>
             <div className="col-md-6">
               <h4 className="service-title">Technology Solutions</h4>
               <p className="service-description">
                 Our team specializes in delivering scalable, efficient
                 technology solutions to meet your business needs.
               </p>
             </div>
           </div>
           <div className="row mt-4">
             <div className="col-md-6">
               <h4 className="service-title">Digital Transformation</h4>
               <p className="service-description">
                 We help businesses adapt to the digital age with innovative
                 transformation strategies and execution.
               </p>
             </div>
             <div className="col-md-6">
               <h4 className="service-title">Custom Software Development</h4>
               <p className="service-description">
                 From concept to deployment, we build custom software that helps
                 your business grow and thrive.
               </p>
             </div>
           </div>
         </div> */}

          {/* Call-to-Action Section */}
          <div className="cta-section bg-light py-5 mt-5">
            <div className="container text-center">
              <h3 className="cta-title">
                Download Our Company Portfolio Today
              </h3>
              <p className="cta-paragraph mt-4">
                Discover how our solutions have transformed businesses like
                yours. Let’s partner together and achieve greatness.
              </p>
              <button
                onClick={downloadPortfolio}
                className="btn btn-main portfolio-btn mt-4"
              >
                Download Company Portfolio{" "}
                <i className="fas fa-file-download ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
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
