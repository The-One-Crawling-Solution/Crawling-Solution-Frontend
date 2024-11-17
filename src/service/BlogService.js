// services/blogService.js
import { API_BASE_URL, getFetchOptions } from "../utils/api";

export const fetchAllBlogs = async (page = 1) => {
  const response = await fetch(
    `${API_BASE_URL}/getBlogs?page=${page}&limit=10`,
    getFetchOptions()
  );
  if (!response.ok) throw new Error("Failed to fetch blogs");
  return await response.json();
};

export const fetchBlogDetails = async (blogId) => {
  const response = await fetch(
    `${API_BASE_URL}/getBlogById?id=${blogId}`,
    getFetchOptions()
  );
  if (!response.ok) throw new Error("Failed to fetch blog details");
  return await response.json();
};

export const fetchRelatedBlogs = async (category) => {
  const payload = { categories: [category] };
  const response = await fetch(
    `${API_BASE_URL}/getBlogsByCategory`,
    getFetchOptions("post", payload)
  );
  if (!response.ok) throw new Error("Failed to fetch related blogs");
  return await response.json();
};
