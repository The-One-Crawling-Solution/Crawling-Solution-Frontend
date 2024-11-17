import { API_BASE_URL, getFetchOptions } from "../utils/api";

const getAuthToken = () => localStorage.getItem("authToken");

export const addBlog = async (blogData) => {
  const response = await fetch(
    `${API_BASE_URL}/createBlog`,
    getFetchOptions("POST", blogData, getAuthToken())
  );
  if (!response.ok) throw new Error("Failed to add blog");
  return await response.json();
};

export const updateBlog = async (blogId, blogData) => {
  const response = await fetch(
    `${API_BASE_URL}/updateBlog?id=${blogId}`,
    getFetchOptions("POST", blogData, getAuthToken())
  );
  if (!response.ok) throw new Error("Failed to update blog");
  return await response.json();
};

export const deleteBlog = async (blogId) => {
  const response = await fetch(
    `${API_BASE_URL}/deleteBlog?id=${blogId}`,
    getFetchOptions("DELETE", null, getAuthToken())
  );
  if (!response.ok) throw new Error("Failed to delete blog");
  return await response.json();
};

export const uploadImage = async (imageFile) => {
  console.log("🚀 ~ uploadImage ~ imageFile:", imageFile);
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(`${API_BASE_URL}/uploadImage`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`, // Include token for authorization
    },
    body: formData,
  });

  if (!response.ok) throw new Error("Failed to upload image");
  return await response.json();
};
