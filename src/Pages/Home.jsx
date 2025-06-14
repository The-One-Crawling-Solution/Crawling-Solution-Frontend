/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Services from "./Services";
import Slider from "../Components/common/Slider";
import { Link } from "react-router-dom";
import CustomerReview from "../Components/common/CustomerReview";
import { Blog1, Blog2, Blog3 } from "../assets/images/imageAssets";
import AboutComponent from "./About";

const Home = () => {
  return (
    <>
      <div className="main-wrapper">
        <Slider />
        <br></br>

        <div className="homepage">
          {/* Hero Section */}
          <section className="home-hero-section">
            <div className="container">
              <div className="home-hero-content">
                <h1 className="home-hero-title">
                  Get the Data You Need with Web Scraping and Extraction
                  <span className="highlight">
                    {" "}
                    Without Hours of Manual Searching
                  </span>
                </h1>
                <p className="home-hero-description">
                  We will not make you wait or guess. You tell us what you need
                  and we provide you with reliable real-time data that simply
                  functions and we deliver it without unnecessary information.
                  We keep it simple, focused and fast because your time and
                  clarity matter more than anything else. We do not dump
                  everything we find, we extract only what is useful, meaningful
                  and built for your next move.
                </p>
                <div className="home-hero-buttons">
                  <button className="btn-primary">
                    <i className="fas fa-rocket"></i>
                    Get Started
                  </button>
                  <button className="btn-secondary">
                    <i className="fas fa-phone"></i>
                    Call +91 9664508201
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="home-services-section">
            <div className="container">
              <h2 className="home-section-title">Our Service Tabs</h2>
              <div className="home-services-grid">
                <div className="home-service-card">
                  <div className="home-service-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="home-service-title">
                    Enterprise– Scale Web Crawling
                  </h3>
                  <p className="home-service-description">
                    Need any specific data from the websites? We build custom
                    scrapers to deliver info like prices, reviews, or listings–
                    exactly what you need, with sharp price intelligence that
                    keeps you ahead...
                  </p>
                  <button className="home-service-btn">
                    <i className="fas fa-arrow-right"></i>
                    Learn More
                  </button>
                </div>

                <div className="home-service-card">
                  <div className="home-service-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h3 className="home-service-title">Mobile App Scraping</h3>
                  <p className="home-service-description">
                    Mobile-first? No problem. We offer you the smart, secure app
                    scraping services that give you seamless access to the exact
                    data you need from mobile apps and hybrid platforms...
                  </p>
                  <button className="home-service-btn">
                    <i className="fas fa-arrow-right"></i>
                    Learn More
                  </button>
                </div>

                <div className="home-service-card">
                  <div className="home-service-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="home-service-title">Web Scraping APIs</h3>
                  <p className="home-service-description">
                    Do you need your data in real-time? Our custom data
                    extraction web scraping APIs that plug right into your
                    system, so that you get reliable access to fresh data–
                    without the manual work...
                  </p>
                  <button className="home-service-btn">
                    <i className="fas fa-arrow-right"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="home-features-section">
            <div className="container">
              <h2 className="home-section-title">What Sets Us Apart</h2>
              <p className="home-section-subtitle">
                No Fancy Words, Just Facts
              </p>

              <div className="home-features-grid">
                <div className="home-feature-item">
                  <div className="home-feature-icon">
                    <i className="fas fa-times-circle"></i>
                  </div>
                  <h4 className="home-feature-title">
                    No Fluff. No Noise. Just Results.
                  </h4>
                  <p className="home-feature-description">
                    You tell us what you need and we scrape it clean. We don't
                    over complicate things and no "consultant speaks." Just
                    straight-up delivery to you.
                  </p>
                </div>

                <div className="home-feature-item">
                  <div className="home-feature-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h4 className="home-feature-title">
                    Custom Like It Should Be.
                  </h4>
                  <p className="home-feature-description">
                    We don't tweak templates or follow shortcuts, so we build
                    everything from scratch to fit your exact mess, no matter
                    how weird the platform or complex API.
                  </p>
                </div>

                <div className="home-feature-item">
                  <div className="home-feature-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h4 className="home-feature-title">Fast. Sharp. On Point.</h4>
                  <p className="home-feature-description">
                    We don't just deliver fast. We deliver you the clean,
                    organized data that actually makes sense and works straight
                    out of the box for you.
                  </p>
                </div>

                <div className="home-feature-item">
                  <div className="home-feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4 className="home-feature-title">Ethical. Always.</h4>
                  <p className="home-feature-description">
                    We always keep things clean, legal, and secure so your data
                    stays yours, and we don't mess with shady shortcuts.
                  </p>
                </div>

                <div className="home-feature-item">
                  <div className="home-feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h4 className="home-feature-title">Support That Stays.</h4>
                  <p className="home-feature-description">
                    We don't vanish after delivery– if something breaks or
                    shifts, we're here to fix it with you, no ticket queues and
                    no run arounds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="home-cta-section">
            <div className="container">
              <div className="home-cta-content">
                <h2 className="home-cta-title">
                  Let's Build Something That Works
                </h2>
                <p className="home-cta-description">
                  Your project deserves a team that understands your goals and
                  delivers results. Have an idea in mind? We are ready when you
                  are.
                </p>
                <div className="home-cta-buttons">
                  <button className="btn-primary">
                    <i className="fas fa-phone"></i>
                    Connect with us: +91 9664508201
                  </button>
                  <button className="btn-outline">
                    <i className="fas fa-eye"></i>
                    See What We've Built
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="download-section">
            <div className="container">
              <div className="download-content">
                <h3 className="download-title">Ready to Get Started?</h3>
                <p className="download-description">
                  Take a quick look at how our work has helped businesses like
                  yours grow smarter. So let's build something that works
                  together.
                </p>
                <button className="btn-download">
                  <i className="fas fa-download"></i>
                  Download & Decide
                </button>
              </div>
            </div>
          </section>
        </div>

        <AboutComponent />
        <Services />
        <CustomerReview />

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
                    src={Blog1}
                    alt="blog 1"
                    className="img-fluid rounded"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
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
                      to="blog-single"
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
                    src={Blog2}
                    alt="blog 2"
                    className="img-fluid rounded"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
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
                      to="blog-single"
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
                    src={Blog3}
                    alt="blog 3"
                    className="img-fluid rounded"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
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
                      to="blog-single"
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
    </>
  );
};

export default Home;
