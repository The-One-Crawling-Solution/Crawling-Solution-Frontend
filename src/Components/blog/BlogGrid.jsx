import React from "react";
import BlogGridData from "../data/BlodGridData";

const BlogGrid = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Our Latest Blogs</h2>
      <div className="row">
        {BlogGridData.map((blog) => (
          <div className="col-md-6 col-lg-4 mb-4" key={blog.id}>
            <div className="card h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href={blog.link} className="btn btn-main">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
