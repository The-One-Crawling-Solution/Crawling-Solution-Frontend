/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchBlogDetails } from "../../hooks/useFetchBlogDetails";
import { useFetchRelatedBlogs } from "../../hooks/useFetchRelatedBlogs";
import LoadingSpinner from "../common/FullScreenLoader";

const BlogSinglePost = () => {
  const { id } = useParams();

  const {
    blog,
    loading: blogLoading,
    error: blogError,
  } = useFetchBlogDetails(id);

  const {
    relatedBlogs,
    loading: relatedLoading,
    error: relatedError,
  } = useFetchRelatedBlogs(blog?.category);

  if (blogLoading || relatedLoading) return <LoadingSpinner />;
  if (blogError || relatedError)
    return <p>Error loading blog details. Please try again.</p>;

  // Format `createdAt` date
  const formattedDate = blog?.createdAt
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(blog.createdAt))
    : "Unknown";

  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <article>
            <h1 className="mb-4">{blog?.title}</h1>
            <p>
              <strong>Posted on: </strong>
              {formattedDate} | <strong>Author: </strong>
              {blog?.author || "Anonymous"}
            </p>

            <img
              src={blog?.image || "https://via.placeholder.com/800x500"}
              className="img-fluid mb-4"
              alt={blog?.title || "Blog Image"}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />

            {/* <p>{blog?.content || "Content not available"}</p> */}

            {blog?.sections?.map((section, index) => (
              <React.Fragment key={index}>
                <h2>{section.subTitle}</h2>
                <p>{section.content}</p>
              </React.Fragment>
            ))}

            <h3>Conclusion</h3>
            <p>{blog?.conclusion || "Conclusion not available."}</p>
          </article>
        </div>

        <aside className="col-md-4">
          <div className="p-4 mb-4 bg-light">
            <h4>About the Author</h4>
            <p>{blog?.authorBio || "Author bio not available."}</p>
          </div>

          <div className="p-4">
            <h4>Related Posts</h4>
            <ul className="list-unstyled">
              {relatedBlogs?.map((relatedBlog) => (
                <li key={relatedBlog._id}>
                  <Link to={`/blogs/${relatedBlog._id}`}>
                    - {relatedBlog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogSinglePost;
