import React from "react";
import { Link } from "react-router-dom";

const Aboutcomponent = () => {
  const downloadPortfolio = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1Cc2T0U9MRBA3JU-zjXB2aTx2DxbHVwzb/view?";
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.target = "_blank";
    anchor.download = "company-portfolio.pdf";
    anchor.click();
  };

  return (
    <>
      <section className="section about position-relative">
        <div className="bg-about"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 offset-md-0">
              <div className="about-item">
                <span className="h6 text-color">What we are</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  We are dynamic team of creative people
                </h2>
                <div className="about-content">
                  <h4 className="mb-3 position-relative">
                    We Don’t Just Do Data. We do DATA.
                  </h4>
                  <p className="mb-5">
                    We help you unleash the power of precise website and mobile
                    data. Our cutting-edge scraping services deliver
                    custom-built scrapers, designed to match your unique
                    requirements. Get the data you need, exactly as you need it,
                    with our scraping services.
                  </p>

                  <h4 className="mb-3 position-relative">
                    Custom Built Enterprise Data Scraping Solutions
                  </h4>
                  <p className="mb-5">
                    We help you get the data you need to ace your industry. Want
                    to get known? The One Crawling Solution is your answer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="row flex">
            {/* CARD 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <Link to="/webscraping" className="scrape-card card-1">
                <div className="card-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">01.</span> Web Scraping Services
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
              <Link to="/appscraping" className="scrape-card card-2">
                <div className="card-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">02.</span> App Scraping Services
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
              <Link to="/webscarpingapi" className="scrape-card card-3">
                <div className="card-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h3 className="mb-3">
                  <span className="card-number">03.</span> Creating Web Scraping
                  APIs
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

export default Aboutcomponent;
