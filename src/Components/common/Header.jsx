/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import GA4Link from "../seo/GA4Link";
import Dropdown from "./Dropdown";
import navConfig from "../data/NavBarData";
// import PrimaryLogo from "../../../public/assets/images/logo/1.svg";
// import PrimaryLogo from "../../assets/images/logo/1.svg";

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
      {/* Navbar */}
      <div
        id="navbar"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 50,
          width: "100%",
        }}
      >
        <div className="row px-5 col-lg-12">
          <nav className="navbar navbar-expand-lg px-0 py-1">
            <GA4Link
              to="/"
              eventLabel="Home"
              className="navbar-brand d-flex align-items-center"
              aria-label="Home"
              onClick={closeMenuAndDropdowns}
            >
              <img
                src="/assets/images/logo/6.svg"
                alt="The One Crawling Solution Logo"
                className="img-fluid"
                loading="lazy"
                decoding="async"
                style={{
                  width: "60px",
                  height: "auto",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
              />
              <span className="d-none d-md-inline text-white">
                The One Crawling Solutions
              </span>{" "}
              <span className="d-md-none text-white">TOCS</span>
            </GA4Link>

            <button
              className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className={`fa ${isOpen ? "fa-times" : "fa-bars"}`}></span>{" "}
              {/* Change icon based on isOpen */}
            </button>

            <div
              className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
              id="navbarsExample09"
            >
              <ul className="navbar-nav ml-auto">
                {navConfig.map((item) =>
                  item.dropdown ? (
                    <Dropdown
                      key={item.label}
                      label={item.label}
                      items={item.dropdown}
                      activeDropdown={activeDropdown}
                      toggleDropdown={toggleDropdown}
                      closeMenu={closeMenuAndDropdowns}
                    />
                  ) : (
                    <li className="nav-item" key={item.label}>
                      <GA4Link
                        to={item.path}
                        eventLabel={item.label}
                        className="nav-link"
                        onClick={closeMenuAndDropdowns}
                      >
                        {item.label}
                      </GA4Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
