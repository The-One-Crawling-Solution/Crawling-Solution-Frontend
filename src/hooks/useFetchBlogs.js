// hooks/useFetchBlogs.js
import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../service/BlogService";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchAllBlogs();
        setBlogs(data?.data?.blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  return { blogs, loading, error };
};
