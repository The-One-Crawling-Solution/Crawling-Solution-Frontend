/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Aboutcomponent from "../Components/Aboutcomponent";
import Services from "./Services";
import Slider from "../Components/common/Slider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="main-wrapper ">
        {/* Link to a CSS file in public folder */}
        <link rel="stylesheet" type="text/css" to="/assets/css/style.css" />

        {/* Import Bootstrap CSS from public folder */}
        <link rel="stylesheet" to="/assets/bootstrap/css/bootstrap.min.css" />

        {/* Import external JavaScript file */}
        <script src="/path/to/your/external.js"></script>

        {/* <!-- Slider Start --> */}
        {/* <section className="slider">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-10">
                <div className="block">
                  <span className="d-block mb-3 text-white text-capitalize">
                    Prepare for new future
                  </span>
                  <h1 className="animated fadeInUp mb-5">
                    Our work is <br />
                    presentation of our <br />
                    capabilities.
                  </h1>
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-main animated fadeInUp btn-round-full"
                  >
                    Get started
                    <i className="btn-icon fa fa-angle-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Slider />
        <br></br>
        {/* <!-- Section Intro Start --> */}

        <section className="section intro">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="section-title">
                  <span className="h6 text-color ">
                    We are creative & expert people
                  </span>
                  <h2 className="mt-3 content-title">
                    We work with business & provide solution to client with
                    their business problem{" "}
                  </h2>
                </div>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-12">
                <div class="intro-item mb-5 mb-lg-0">
                  <i class="fas fa-piggy-bank color-one"></i>
                  <h4 className="mt-4 mb-3">
                    Increased efficiency and cost savings
                  </h4>
                  <p>
                    Boost productivity while reducing operational expenses
                    through automation.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="intro-item mb-5 mb-lg-0">
                  <i class="fas fa-lightbulb color-one"></i>
                  <h4 className="mt-4 mb-3">
                    Market research and competitive intelligence
                  </h4>
                  <p>
                    Gain valuable insights into market trends and outperform
                    competitors.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-12">
                <div class="intro-item">
                  <i class="fas fa-database color-one"></i>
                  <h4 className="mt-4 mb-3">
                    Data-driven decision-making and unignorable data
                    opportunities
                  </h4>
                  <p>
                    Leverage data insights to uncover new opportunities and
                    drive decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <hr /> */}
        <Aboutcomponent />
        <Services />

        {/* <!-- Section Testimonial End --> */}
        <section className="section latest-blog bg-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h6 text-color">Latest News</span>
                  <h2 className="mt-3 content-title text-white">
                    Latest articles to enrich knowledge
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card bg-transparent border-0">
                  <img
                    src="assets/images/blog/1.jpg"
                    alt="blog 1"
                    className="img-fluid rounded"
                  />

                  <div className="card-body mt-2">
                    <div className="blog-item-meta">
                      <a href="#" className="text-white-50">
                        Data Extraction<span className="ml-2 mr-1">/</span>
                      </a>
                      <a href="#" className="text-white-50">
                        Automation<span className="ml-1">/</span>
                      </a>
                      <a href="#" className="text-white-50 ml-1">
                        <i className="fa fa-user mr-2"></i>admin
                      </a>
                    </div>

                    <h3 className="mt-3 mb-5 lh-36">
                      <a href="#" className="text-white">
                        Leveraging Web Scraping for Competitive Intelligence
                      </a>
                    </h3>

                    <Link
                      href="blog-single"
                      className="btn btn-small btn-solid-border btn-round-full text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <img
                    src="assets/images/blog/2.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />

                  <div className="card-body mt-2">
                    <div className="blog-item-meta">
                      <a href="#" className="text-white-50">
                        Data Collection<span className="ml-2 mr-2">/</span>
                      </a>
                      <a href="#" className="text-white-50">
                        Data Analysis<span className="ml-2">/</span>
                      </a>
                      <a href="#" className="text-white-50 ml-2">
                        <i className="fa fa-user mr-2"></i>admin
                      </a>
                    </div>

                    <h3 className="mt-3 mb-5 lh-36">
                      <a href="#" className="text-white">
                        How Data Scraping Enhances Consumer Insights
                      </a>
                    </h3>

                    <Link
                      href="blog-single"
                      className="btn btn-small btn-solid-border btn-round-full text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="card border-0 bg-transparent">
                  <img
                    src="assets/images/blog/3.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />

                  <div className="card-body mt-2">
                    <div className="blog-item-meta">
                      <a href="#" className="text-white-50">
                        Data Scraping<span className="ml-2 mr-2">/</span>
                      </a>
                      <a href="#" className="text-white-50">
                        Market Insights<span className="ml-2">/</span>
                      </a>
                      <a href="#" className="text-white-50 ml-2">
                        <i className="fa fa-user mr-2"></i>admin
                      </a>
                    </div>

                    <h3 className="mt-3 mb-5 lh-36">
                      <a href="#" className="text-white">
                        Effective Data Scraping Strategies for Market Analysis
                      </a>
                    </h3>

                    <Link
                      href="blog-single"
                      className="btn btn-small btn-solid-border btn-round-full text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-70 position-relative">
          <div className="container">
            <div className="cta-block-2 bg-gray p-5 rounded border-1">
              <div className="row justify-content-center align-items-center ">
                <div className="col-lg-7">
                  <h2 className="mt-2 mb-4 mb-lg-0">
                    Entrust Your Project to Our Best Team of Professionals
                  </h2>
                </div>
                <div className="col-lg-4">
                  <a
                    href="/contact"
                    className="btn btn-main btn-round-full float-lg-right "
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- footer Start --> */}
      </div>

      {/* <!-- Google Map --> */}
      <script src="plugins/google-map/map.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA&callback=initMap"></script>

      <script src="js/script.js"></script>
    </>
  );
};

export default Home;
