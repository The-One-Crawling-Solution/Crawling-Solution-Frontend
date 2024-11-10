// hooks/useFetchBlogDetails.js
import { useEffect, useState } from "react";
import { fetchBlogDetails } from "../service/BlogService";

export const useFetchBlogDetails = (blogId) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await fetchBlogDetails(blogId);
        setBlog(data?.data?.blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [blogId]);

  return { blog, loading, error };
};
