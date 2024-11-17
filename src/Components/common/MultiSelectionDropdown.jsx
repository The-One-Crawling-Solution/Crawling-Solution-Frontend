import React from "react";

const MultiSelectWithRemove = ({ categories, setCategories }) => {
  const staticCategories = [
    "App Scraping",
    "Web Scraping",
    "API Scraping",
    "Foods",
    "Weather",
    "Sport",
    "E-Commerce",
    "OTT",
  ];

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue && !categories.includes(selectedValue)) {
      setCategories([...categories, selectedValue]);
    }
    e.target.value = ""; // Reset the dropdown to allow re-selection
  };

  const handleRemove = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <>
      <label>Sections</label>
      {/* Dropdown for selecting categories */}
      <div className="form-group">
        <select
          className="form-control"
          onChange={handleSelect}
          defaultValue="" // Placeholder value
        >
          <option value="" disabled>
            Select a category
          </option>
          {staticCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Display selected categories as tags */}
      {categories.length > 0 && (
        <div className="mt-3">
          <label>Selected Categories:</label>
          <div className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <div
                key={cat}
                className="badge badge-primary d-flex align-items-center p-2"
                style={{ cursor: "pointer" }}
                onClick={() => handleRemove(cat)}
              >
                {cat}
                <span
                  className="ml-2 text-danger font-weight-bold"
                  style={{ marginLeft: "8px" }}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MultiSelectWithRemove;
