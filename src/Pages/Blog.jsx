import React from "react";
import BlogPost from "../Components/blog/BlogPost";
import BlogData from "../Components/data/BlogData";

const Blog = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Blog</h1>
      <div className="row">
        {BlogData.map((post) => (
          <div className="col-lg-12" key={post.id}>
            <BlogPost
              title={post.title}
              image={post.image}
              date={post.date}
              excerpt={post.excerpt}
              content={post.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
