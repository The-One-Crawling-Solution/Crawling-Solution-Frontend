/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images/imageAssets";

const Footer = () => {
  return (
    <footer className="footer section" style={{ minHeight: "300px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="widget">
              <div className="logo mb-4">
                <h4 className="text-capitalize mb-4">Info.</h4>
                <div className="d-flex justify-content-start align-items-center gap-2">
                  <Link className="navbar-brand" to="/" aria-label="Home">
                    <img
                      src={Logo}
                      alt="The One Crawling Solution Logo"
                      loading="eager" // Changed to eager to prioritize critical logo load
                      decoding="async"
                      width="60"
                      height="60"
                      style={{
                        borderRadius: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <h4 className="text-color mb-0">The One Crawling Solution</h4>
                </div>
                <div>
                  <div className="social-row">
                    <ul className="list-inline social-icons">
                      <li className="list-inline-item">
                        <a
                          href="https://www.instagram.com/theonecrawlingsolution/"
                          aria-label="Instagram"
                          className="social-icon instagram"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://x.com/onecrawling6263"
                          aria-label="Twitter"
                          className="social-icon twitter"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span style={{ fontSize: "25px" }}>𝕏</span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="https://www.linkedin.com/company/the-one-crawling-solution"
                          aria-label="LinkedIn"
                          className="social-icon linkedin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      {/* <li className="list-inline-item">
                        <a
                          href="https://www.facebook.com/theonecrawlingsolution/"
                          aria-label="Facebook"
                          className="social-icon facebook"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li> */}
                      <li className="list-inline-item">
                        <a
                          href="https://in.pinterest.com/theonecrawlingsolution/"
                          aria-label="Pinterest"
                          className="social-icon pinterest"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget">
              <h4 className="text-capitalize mb-4">Company</h4>
              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link to="/term-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Support</Link>
                </li>
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
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/all-services">Services</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
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
              <p>Contact us for low rate data scraping</p>
              <form action="#" className="sub-form">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Contact Us ..."
                  aria-label="Contact input"
                />
                <Link to="/contact" className="btn btn-main btn-small">
                  Connect
                </Link>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-btm pt-4">
          <div className="container">
            <div className="d-flex flex-column align-items-center text-center">
              <div className="mb-3">
                <div className="footer-contact-socials">
                  <div className="contact-row">
                    <ul className="list-inline footer-contact">
                      <li className="list-inline-item">
                        <a href="mailto:theonecrawlingsolutions@gmail.com">
                          <i className="fas fa-envelope mr-2"></i>
                          theonecrawlingsolutions@gmail.com
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="tel:+919664508201">
                          <i className="fas fa-phone mr-2"></i>
                          +91 9664508201
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-1">
                <div className="copyright">
                  &copy; Copyright Reserved by{" "}
                  <a
                    href="https://theonecrawlingsolution.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The One Crawling Solutions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
