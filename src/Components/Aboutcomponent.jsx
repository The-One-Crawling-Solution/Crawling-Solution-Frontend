import React from "react";
import { Link } from "react-router-dom";

const Aboutcomponent = () => {
  return (
    <>
      <section class="section about position-relative">
        <div class="bg-about"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-6 offset-md-0">
              <div class="about-item">
                <span class="h6 text-color">What we are</span>
                <h2 class="mt-3 mb-4 position-relative content-title">
                  We are dynamic team of creative people
                </h2>
                <div class="about-content">
                  <h4 class="mb-3 position-relative">
                    We Don’t Just Do Data. We do DATA.
                  </h4>
                  <p class="mb-5">
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
          <div className="row">
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
