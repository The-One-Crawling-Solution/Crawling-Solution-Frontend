import React from "react";

const BlogPost = ({ title, image, date, excerpt, content }) => {
  return (
    <div className="blog-post mb-5">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <p className="post-date">{date}</p>
        <img
          src={image}
          alt={title}
          className="img-fluid my-3"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
        <p className="post-excerpt">{excerpt}</p>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
