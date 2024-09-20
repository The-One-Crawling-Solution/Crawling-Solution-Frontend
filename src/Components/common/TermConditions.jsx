import React from "react";
import TermConditions from "../data/TermConditions";

const TermsConditions = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Terms and Conditions</h1>
      <div className="accordion" id="termsAccordion">
        {TermConditions.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={{
                  backgroundColor: "#FFFF",
                  border: "none",
                }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                <strong>{`${index + 1}. ${item.title}`}</strong>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse"
              data-bs-parent="#termsAccordion"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsConditions;
