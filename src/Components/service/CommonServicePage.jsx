import React from "react";

const CommonServicePage = ({
  title,
  subtitle,
  mainImage,
  content,
  ctaText,
}) => {
  return (
    <div className="service-page">
      <div className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-heading">{title}</h1>
              <h3 className="hero-subtitle">{subtitle}</h3>
              {content.hero.map((paragraph, index) => (
                <p key={index} className="hero-subheading">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="col-lg-6">
              <img
                src={mainImage}
                alt={title}
                className="img-fluid mt-4 mt-lg-0"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  borderRadius: "10px",

                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <hr
        className="my-5"
        style={{
          margin: "0 auto",
          width: "1200px",
          height: "2px",
          backgroundColor: "currentColor",
          border: "none",
        }}
      />

      <h3 className="text-center mb-5">Content</h3>

      <div className="content-section py-5">
        <div className="container">
          {content.sections.map((section, index) => (
            <div
              key={index}
              className={`row align-items-center mb-5 ${
                index % 2 === 0 ? "flex-lg-row" : "flex-lg-row-reverse"
              }`}
            >
              <div className="col-lg-6">
                <img
                  src={section.image}
                  alt={`${title} - ${section.title}`}
                  className="img-fluid mb-4 mb-lg-0"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <h3 className="section-title mb-4">{section.title}</h3>

                {section.list && (
                  <ul className="section-list">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex}>
                        <strong>{item.title}:</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                {section.paragraphs && (
                  <div className="section-list mt-4">
                    {section.paragraphs.map((paragraph, pIndex) => (
                      <p key={pIndex} className="section-paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section bg-light py-5">
        <div className="container text-center">
          <h3 className="cta-title">{ctaText}</h3>
          <p className="cta-paragraph mt-4">
            Ready to take the next step? Contact us today to learn more about
            how we can help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonServicePage;
