import { useEffect, useState } from "react";
import { fetchRelatedBlogs } from "../service/BlogService";

export const useFetchRelatedBlogs = (category) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return; // Do nothing if category is not defined

    const loadRelatedBlogs = async () => {
      setLoading(true);
      try {
        const data = await fetchRelatedBlogs(category);
        setRelatedBlogs(data?.data?.blogs);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRelatedBlogs();
  }, [category]); // Re-fetch only when category changes

  return { relatedBlogs, loading, error };
};
