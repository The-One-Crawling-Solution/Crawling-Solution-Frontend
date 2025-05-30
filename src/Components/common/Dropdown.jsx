/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
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
  const isActive = activeDropdown === label.toLowerCase();

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    toggleDropdown(label.toLowerCase());
    // Track dropdown toggle event
    ReactGA.event({
      category: "Navigation",
      action: "Dropdown Toggle",
      label: `${label} Dropdown`,
    });
  };

  return (
    <li className={`nav-item dropdown ${isActive ? "show" : ""}`}>
      <a
        className="nav-link dropdown-toggle"
        href="#"
        onClick={handleDropdownToggle}
        aria-expanded={isActive}
      >
        {label} <i className="fas fa-chevron-down small"></i>
      </a>
      <ul className={`dropdown-menu ${isActive ? "show" : ""}`}>
        {items.map((item) => (
          <li key={item.label}>
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
