/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mylogo from "../../images/about/mylogo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isOpen) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const closeMenuAndDropdowns = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navigation">
      {/* Navbar Top  */}
      {/* <div className="header-top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-2 col-md-4">
              <div className="header-top-socials text-center text-lg-left text-md-left">
                <a
                  href="https://www.facebook.com/themefisher"
                  aria-label="facebook"
                  alt="theonecrawlingsolution"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/themefisher"
                  aria-label="twitter"
                  alt="theonecrawlingsolution"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/themefisher/"
                  aria-label="github"
                  alt="theonecrawlingsolution"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
              <div className="header-top-info mb-2 mb-md-0">
                <a href="tel:+23-345-67890">
                  Call Us : <span>+91-96645-08201</span>
                </a>
                <a
                  href="mailto:theonecrawlingsolutions@gmail.com"
                  className="d-block"
                >
                  <i className="fas fa-envelope mr-2 "></i>
                  <span>theonecrawlingsolutions@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </div> */}

      {/* Navbar  */}
      <div id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg px-0 py-4">
                <Link
                  className="navbar-brand d-flex align-items-center"
                  to="/"
                  aria-label="Home"
                >
                  <img
                    src={mylogo}
                    alt="The One Crawling Solution Logo"
                    className="img-fluid"
                    style={{
                      width: "60px",
                      height: "auto",
                      marginRight: "10px",
                      borderRadius: "10px",
                    }}
                  />
                  <span className="d-none d-md-inline">
                    The One Crawling Solution
                  </span>{" "}
                  <span className="d-md-none">Crawling Solution</span>{" "}
                </Link>

                <button
                  className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
                  type="button"
                  onClick={toggleMenu}
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation"
                >
                  <span
                    className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}
                  ></span>{" "}
                  {/* Change icon based on isOpen */}
                </button>

                <div
                  className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                  id="navbarsExample09"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={closeMenuAndDropdowns}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/about"
                        onClick={closeMenuAndDropdowns}
                      >
                        About
                      </Link>
                    </li>

                    {/* <li
                      className={`nav-item dropdown ${
                        activeDropdown === "about" ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown("about");
                        }}
                      >
                        About <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeDropdown === "about" ? "show" : ""
                        }`}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/about"
                            onClick={closeMenuAndDropdowns}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/blog"
                            onClick={closeMenuAndDropdowns}
                          >
                            Blog
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/portfolio"
                        onClick={closeMenuAndDropdowns}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li
                      className={`nav-item dropdown ${
                        activeDropdown === "services" ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown("services");
                        }}
                      >
                        Services <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeDropdown === "services" ? "show" : ""
                        }`}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/services"
                            onClick={closeMenuAndDropdowns}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/realestate"
                            onClick={closeMenuAndDropdowns}
                          >
                            Real Estate Data Scraping
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/ecommerce"
                            onClick={closeMenuAndDropdowns}
                          >
                            E-Commerce and Retail Scraping
                          </Link>
                        </li>
                        <Link
                          className="dropdown-item"
                          to="/healthcare"
                          aria-label="Healthcare Scraping"
                        >
                          Healthcare Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/food"
                          aria-label="Food Scraping"
                        >
                          Food Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/entertainment"
                          aria-label="Entertainment Scraping"
                        >
                          Entertainment Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/education"
                          aria-label="Education Scraping"
                        >
                          Education Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/travel"
                          aria-label="Travel Scraping"
                        >
                          Travel Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/sport"
                          aria-label="Sports Scraping"
                        >
                          Sports Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/grocery"
                          aria-label="Grocery Scraping"
                        >
                          Grocery Site Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/socialmedia"
                          aria-label="Social Media Scraping"
                        >
                          Social Media Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/jobs"
                          aria-label="Jobs Scraping"
                        >
                          Jobs Site Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/engineering"
                          aria-label="OTT Scraping"
                        >
                          OTT Scraping
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/taxibook"
                          aria-label="Taxi Booking Scraping"
                        >
                          Taxi Booking Scraping
                        </Link>{" "}
                      </ul>
                    </li>

                    <li
                      className={`nav-item dropdown ${
                        activeDropdown === "blog" ? "show" : ""
                      }`}
                    >
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown("blog");
                        }}
                      >
                        Blog <i className="fas fa-chevron-down small"></i>
                      </a>
                      <ul
                        className={`dropdown-menu ${
                          activeDropdown === "blog" ? "show" : ""
                        }`}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/blog"
                            onClick={closeMenuAndDropdowns}
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/blog-grid"
                            onClick={closeMenuAndDropdowns}
                          >
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/blog-single"
                            onClick={closeMenuAndDropdowns}
                          >
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/contact"
                        onClick={closeMenuAndDropdowns}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
