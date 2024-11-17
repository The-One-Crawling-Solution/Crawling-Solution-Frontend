import React, { useState } from "react";
import { useAddBlogData } from "../hooks/useAddBlogData";
import { uploadImage } from "../service/AddBlogDataService";
import MultiSelectWithRemove from "../Components/common/MultiSelectionDropdown";

const AddBlogData = () => {
  const { createBlog, loading, error, successMessage } = useAddBlogData();
  const [title, setTitle] = useState("");
  const [sections, setSections] = useState([{ subTitle: "", content: "" }]);
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);

  const handleAddSection = () => {
    setSections([...sections, { subTitle: "", content: "" }]);
  };

  const handleRemoveSection = (index) => {
    if (sections.length > 1) {
      setSections(sections.filter((_, i) => i !== index));
    } else {
      alert("At least one section is required!");
    }
  };

  const handleSectionChange = (index, field, value) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, [field]: value } : section
    );
    setSections(updatedSections);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadLoading(true);
    try {
      const response = await uploadImage(file);
      setImage(response.data.imageUrl); // Assuming the API response returns `imageUrl`
    } catch (err) {
      console.error("Image upload failed:", err.message);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (sections.length === 0) {
      alert("Please add at least one section.");
      return;
    }

    const blogData = {
      title,
      sections,
      category: categories, // Already an array from the multi-select
      image,
      author,
    };

    try {
      await createBlog(blogData);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Create New Blog</h2>
      {loading && <p>Loading...</p>}
      {uploadLoading && <p>Uploading Image...</p>}
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        {/* Title field  */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Image Upload field */}
        <div className="form-group mt-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {image && (
            <p className="text-success mt-2">Image uploaded successfully!</p>
          )}
        </div>

        {/* Author Field  */}
        <div className="form-group mt-3">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        {/* Multi select Catedories Field  */}
        <MultiSelectWithRemove
          categories={categories}
          setCategories={setCategories}
        />

        {/* Section With Title and Content  */}
        <h5 className="mt-4">Sections</h5>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                className="form-control"
                value={section.subTitle}
                onChange={(e) =>
                  handleSectionChange(index, "subTitle", e.target.value)
                }
                required
              />
            </div>
            <div className="form-group mt-2">
              <label>Content</label>
              <textarea
                className="form-control"
                rows="3"
                value={section.content}
                onChange={(e) =>
                  handleSectionChange(index, "content", e.target.value)
                }
                required
              />
            </div>
            {index >= 1 && (
              <button
                type="button"
                className="btn btn-danger mt-2"
                onClick={() => handleRemoveSection(index)}
              >
                Remove Section
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary mb-3"
          onClick={handleAddSection}
        >
          Add Section
        </button>

        <button type="submit" className="btn btn-main w-100">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogData;
