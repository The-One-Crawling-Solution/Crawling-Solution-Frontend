import { useEffect, useState } from "react";
import { fetchAllBlogs } from "../service/BlogService";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Current page
  console.log("🚀 ~ useFetchBlogs ~ page:", page);
  const [hasMore, setHasMore] = useState(true); // Whether there are more blogs to load
  console.log("🚀 ~ useFetchBlogs ~ hasMore:", hasMore);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const data = await fetchAllBlogs(page);
        setBlogs((prevBlogs) => [...prevBlogs, ...data?.data?.blogs]);
        setHasMore(data?.data?.blogs?.length > 0); // Check if more blogs are available
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [page]);

  const loadMore = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1); // Increment page to load more blogs
  };

  return { blogs, loading, error, loadMore, hasMore };
};
