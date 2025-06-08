/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import GA4Link from "../seo/GA4Link";
import PropTypes from "prop-types";
import ReactGA from "react-ga4";

const Dropdown = ({
  label,
  items,
  activeDropdown = null,
  toggleDropdown,
  closeMenu,
}) => {
  const [isTouch, setIsTouch] = useState(false);
  const dropdownKey = label.toLowerCase();
  const isActive = activeDropdown === dropdownKey;

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    toggleDropdown(dropdownKey);
    ReactGA.event({
      category: "Navigation",
      action: "Dropdown Toggle",
      label: `${label} Dropdown`,
    });
  };

  const handleMouseEnter = () => {
    if (!isTouch) toggleDropdown(dropdownKey);
  };

  const handleMouseLeave = () => {
    if (!isTouch) toggleDropdown(null);
  };

  return (
    <li
      className={`nav-item dropdown ${isActive ? "show" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className="nav-link dropdown-toggle"
        href="#"
        onClick={handleToggle}
        aria-expanded={isActive}
      >
        {label} <i className="fas fa-chevron-down small"></i>
      </a>

      <ul
        className={`dropdown-menu ${isActive ? "show" : ""}`}
        style={{
          minWidth: "300px",
          padding: "2px 4px",
          borderRadius: "5px",
          transition: "all 0.2s ease-in-out",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        {items.map((item) => (
          <li key={item.label} style={{ borderRadius: "5px" }}>
            <GA4Link
              to={item.path}
              eventLabel={item.label}
              className="dropdown-item"
              onClick={closeMenu}
            >
              {item.label}
            </GA4Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeDropdown: PropTypes.string,
  toggleDropdown: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default Dropdown;
