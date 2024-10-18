import React from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import PropTypes from "prop-types";

/**
 * GA4Link Component
 * A wrapper around react-router-dom's Link component that sends a GA4 event on click.
 *
 * Props:
 * - to: string (required) - The target route.
 * - eventLabel: string (required) - The label for the GA4 event.
 * - children: node - The content inside the Link.
 * - onClick: function - Additional onClick handler.
 * - ...props: any other props to pass to Link.
 */
const GA4Link = ({ to, eventLabel, children, onClick, ...props }) => {
  const handleClick = (e) => {
    // Send the GA4 event
    ReactGA.event({
      category: "Navigation",
      action: "Menu Click",
      label: eventLabel,
    });

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

GA4Link.propTypes = {
  to: PropTypes.string.isRequired,
  eventLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

GA4Link.defaultProps = {
  onClick: null,
};

export default GA4Link;
