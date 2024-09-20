import React from "react";

const PortfolioDownload = () => {
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
                Leverage the latest technologies and industry best practices to
                stay ahead of the curve.
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
            <h3 className="cta-title">Download Our Company Portfolio Today</h3>
            <p className="cta-paragraph mt-4">
              Discover how our solutions have transformed businesses like yours.
              Let’s partner together and achieve greatness.
            </p>
            <button
              onClick={downloadPortfolio}
              className="btn btn-main portfolio-btn mt-4"
              tar
            >
              Download Company Portfolio{" "}
              <i className="fas fa-file-download ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDownload;
