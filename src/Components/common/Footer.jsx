/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import mylogo from "../../images/about/mylogo.jpeg";

const Footer = () => {
  return (
    <>
      <footer className="footer section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Company</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  <li>
                    <Link href="/term-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  {/* <li><a href="#">FAQ</a></li> */}
                  <li>
                    <Link to="/faqs">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Quick Links</h4>

                <ul className="list-unstyled footer-menu lh-35">
                  {/* <li><a href="#">About</a></li> */}
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget">
                <h4 className="text-capitalize mb-4">Contact Us</h4>
                <p>Contact us low rates data scraping </p>

                <form action="#" className="sub-form">
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Contact Us ..."
                  />
                  <Link href="/contact" className="btn btn-main btn-small">
                    Connect
                  </Link>
                </form>
              </div>
            </div>

            <div className="col-lg-4  col-sm-6">
              <div className="widget">
                <div className="logo mb-4 ">
                  <h4 className="text-capitalize mb-4">Info.</h4>
                  <div className="d-flex justify-content-center align-items-center ">
                    <Link className="navbar-brand" to="/" aria-label="Home">
                      <img
                        src={mylogo}
                        alt="The One Crawling Solution Logo"
                        style={{
                          height: "60px",
                          borderRadius: "10px",
                          marginBottom: "10px",
                        }}
                      />
                    </Link>
                    <h4 className="text-color">The One Crawling Solution</h4>
                  </div>
                </div>

                <div className="contact-info">
                  <h6 className="mb-2">
                    <i className="fas fa-envelope mr-2"></i>
                    <a
                      href="mailto:theonecrawlingsolutions@gmail.com"
                      style={{
                        color: "#333",
                        textDecoration: "none",
                      }}
                    >
                      theonecrawlingsolutions@gmail.com
                    </a>
                  </h6>
                  <h6>
                    <i className="fas fa-phone mr-2"></i>
                    <a
                      href="tel:+919664508201"
                      className="text-color "
                      style={{ color: "#333", textDecoration: "none" }}
                    >
                      +91 9664508201
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-btm pt-4">
            <div className="container">
              <div className="d-flex flex-column align-items-center text-center">
                {/* Social Icons */}
                <div className="mb-3">
                  <ul className="list-inline footer-socials">
                    <li className="list-inline-item">
                      <a
                        href="https://www.facebook.com/themefisher"
                        aria-label="facebook"
                        alt="theonecrawlingsolution"
                      >
                        <i className="fab fa-facebook mr-2"></i>Facebook
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/themefisher"
                        aria-label="twitter"
                        alt="theonecrawlingsolution"
                      >
                        <i className="fab fa-twitter mr-2"></i>Twitter
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.pinterest.com/themefisher/"
                        aria-label="github"
                        alt="theonecrawlingsolution"
                      >
                        <i className="fab fa-linkedin mr-2"></i>LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Copyright Text */}
                <div className="mt-1">
                  <div className="copyright">
                    &copy; Copyright Reserved to{" "}
                    <span className="text-color">
                      theonecrawlingsolutions.com
                    </span>{" "}
                    by{" "}
                    <a
                      href="https://themefisher.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      theonecrawlingsolutions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
