import React from "react";
import { useFetchBlogs } from "../../hooks/useFetchBlogs";
import { Link } from "react-router-dom";
import LoadingSpinner from "../common/FullScreenLoader";

const BlogGrid = () => {
  const { blogs, loading, error, loadMore, hasMore } = useFetchBlogs();

  if (loading && blogs.length === 0) return <LoadingSpinner />;
  if (error) return <p className="text-center text-danger">{error}</p>;

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Latest Blogs</h2>
      <div className="row">
        {blogs
          .filter((blog) => blog.isActive) // Only show active blogs
          .map((blog) => (
            <div className="col-md-6 col-lg-4 mb-4" key={blog._id}>
              <div className="card h-100">
                <img
                  src={blog.image || "https://via.placeholder.com/300x200"}
                  className="card-img-top"
                  alt={blog.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    {/* Display the first section's content as a description */}
                    {blog.sections.length > 0
                      ? blog.sections[0].content.length > 100
                        ? blog.sections[0].content.slice(0, 100) + "..."
                        : blog.sections[0].content
                      : "No description available."}
                  </p>
                  <Link to={`/blogs/${blog._id}`} className="btn btn-main">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-4">
          <button
            className="btn btn-main"
            onClick={loadMore}
            disabled={loading} // Disable while loading
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogGrid;
