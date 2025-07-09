import React, { useState, useEffect } from "react";
import "../../assets/css/stickyContact.css";

const StickyContact = ({
  phoneNumber = "+919664508201",
  email = "theonecrawlingsolutions@gmail.com",
  whatsappNumber = "+919664508201",
  whatsappMessage = "Hello! I'm interested in your services.",

  socialLinks = {
    facebook: "https://www.facebook.com/theonecrawlingsolution/",
    instagram: "https://www.instagram.com/theonecrawlingsolution/",
    twitter: "https://x.com/onecrawling6263",
    linkedin: "https://www.linkedin.com/company/the-one-crawling-solution",
    pinterest: "https://in.pinterest.com/theonecrawlingsolution/",
  },

  position = "center",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Scroll event listener
    const handleScroll = () => {
      setIsScrolling(true);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to show component after 3 seconds of no scrolling
      const newTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);

      setScrollTimeout(newTimeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTimeout]);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_self");
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  const stickcontactItems = [
    {
      id: "whatsapp",
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
      action: handleWhatsAppClick,
      className: "sticky-whatsapp",
      priority: true,
    },
    {
      id: "phone",
      icon: "fas fa-phone",
      label: "Call",
      action: handlePhoneClick,
      className: "sticky-phone",
    },
    {
      id: "email",
      icon: "fas fa-envelope",
      label: "Email",
      action: handleEmailClick,
      className: "sticky-email",
    },
  ];

  const socialItems = [
    {
      id: "facebook",
      icon: "fab fa-facebook-f",
      label: "Facebook",
      url: socialLinks.facebook,
      className: "sticky-facebook",
    },
    {
      id: "instagram",
      icon: "fab fa-instagram",
      label: "Instagram",
      url: socialLinks.instagram,
      className: "sticky-instagram",
    },
    {
      id: "twitter",
      icon: "fab fa-twitter",
      label: "Twitter",
      url: socialLinks.twitter,
      className: "sticky-twitter",
    },
    {
      id: "linkedin",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
      url: socialLinks.linkedin,
      className: "sticky-linkedin",
    },
    {
      id: "pinterest",
      icon: "fa-brands fa-pinterest",
      label: "Pinterest",
      url: socialLinks.pinterest,
      className: "sticky-pinterest",
    },
  ].filter((item) => item.url && item.url !== "#");

  // Determine visibility based on scroll state
  const shouldShow = isVisible && !isScrolling;

  if (isMobile) {
    // Mobile: Single floating action button with expandable menu
    return (
      <div className={`stickcontact-mobile ${shouldShow ? "visible" : ""}`}>
        <div className="stickcontact-fab-container">
          {/* Main WhatsApp FAB */}
          <div
            className="stickcontact-fab main-fab sticky-whatsapp"
            onClick={handleWhatsAppClick}
          >
            <i className="fab fa-whatsapp"></i>
          </div>

          {/* Secondary actions - compact row */}
          <div className="stickcontact-secondary-actions">
            <div
              className="stickcontact-mini-item sticky-phone"
              onClick={handlePhoneClick}
            >
              <i className="fas fa-phone"></i>
            </div>
            <div
              className="stickcontact-mini-item sticky-email"
              onClick={handleEmailClick}
            >
              <i className="fas fa-envelope"></i>
            </div>
            {socialItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={`stickcontact-mini-item ${item.className}`}
                onClick={() => handleSocialClick(item.url)}
              >
                <i className={item.icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Social Links - Left Edge */}
      <div
        className={`stickcontact-desktop stickcontact-social ${position} ${
          shouldShow ? "visible" : ""
        }`}
      >
        {socialItems.map((item, index) => (
          <div
            key={item.id}
            className={`stickcontact-edge-item ${item.className}`}
            onClick={() => handleSocialClick(item.url)}
            style={{ animationDelay: `${index * 0.1}s` }}
            title={item.label}
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </div>

      {/* Contact Details - Right Edge */}
      <div
        className={`stickcontact-desktop stickcontact-details ${position} ${
          shouldShow ? "visible" : ""
        }`}
      >
        {stickcontactItems.map((item, index) => (
          <div
            key={item.id}
            className={`stickcontact-edge-item ${item.className}`}
            onClick={item.action}
            style={{ animationDelay: `${index * 0.1}s` }}
            title={item.label}
          >
            <i className={item.icon}></i>
          </div>
        ))}
      </div>
    </>
  );
};

export default StickyContact;
