import { useState } from "react";
import { addBlog } from "../service/AddBlogDataService";

export const useAddBlogData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const createBlog = async (blogData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await addBlog(blogData);

      if (!response.ok) {
        throw new Error("Failed to create blog. Please try again.");
      }

      const data = await response.json();
      setSuccessMessage(data.message || "Blog created successfully!");
      return data; // Return the data for further use if needed
    } catch (err) {
      setError(err.message || "An error occurred while creating the blog.");
      throw err; // Re-throw the error to allow handling in the component
    } finally {
      setLoading(false);
    }
  };

  return { createBlog, loading, error, successMessage };
};
