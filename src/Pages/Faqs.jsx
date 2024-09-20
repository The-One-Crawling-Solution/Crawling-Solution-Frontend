import React from "react";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is data scraping?",
      answer:
        "Data scraping is the process of automatically extracting data from websites and converting it into a structured format for analysis or other purposes. It's like copying and pasting information online, but done by software at a much larger scale.",
    },
    {
      question: "What are the benefits of data scraping?",
      answer: (
        <div>
          <p>
            Data scraping can help businesses in various ways. Here are 5
            benefits of Data Scraping:
          </p>
          <ul style={{ listStyleType: "decimal", marginLeft: "20px" }}>
            <li>
              Market research: Analyze competitor pricing, product trends, and
              customer sentiment.
            </li>
            <li>
              Lead generation: Identify potential customers based on online
              activity.
            </li>
            <li>
              Price monitoring: Track competitor pricing and ensure yours is
              competitive.
            </li>
            <li>
              Content creation: Gather data for reports, articles, and
              infographics.
            </li>
            <li>
              Machine learning: Train machine learning models with large
              datasets.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What types of data can you scrape?",
      answer: (
        <div>
          <p>We can scrape a wide variety of data, including:</p>
          <ul style={{ listStyleType: "decimal", marginLeft: "20px" }}>
            <li>
              Text: product descriptions, reviews, news articles, social media
              posts.
            </li>
            <li>Numbers: prices, stock levels, financial data, event dates.</li>
            <li>Images: product photos, logos, infographics.</li>
            <li>Structured data: tables, lists, spreadsheets.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How much does data scraping cost?",
      answer:
        "The cost depends on the complexity of the project, the amount of data, and the frequency of scraping. We offer customized pricing options to fit your budget.",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqItems.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
              >
                <strong>{`Q${index + 1}: ${item.question}`}</strong>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${
                index === 0 ? "show" : ""
              }`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
