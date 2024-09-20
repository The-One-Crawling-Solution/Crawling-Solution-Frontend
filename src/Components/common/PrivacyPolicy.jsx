import React from "react";
import PrivacyPolicys from "../data/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <div className="accordion" id="privacyAccordion">
        {PrivacyPolicys.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button "
                style={{
                  backgroundColor: "#FFFF",
                  border: "none",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#privacyCollapse${index}`}
              >
                <strong>{`${index + 1}. ${item.title}`}</strong>
              </button>
            </h2>
            <div
              id={`privacyCollapse${index}`}
              className="accordion-collapse "
              data-bs-parent="#privacyAccordion"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
