import React from "react";
import { useSelector } from "react-redux";
import BlogEditor from "./BlogEditor";
import BlogPosts from "./BlogPosts";

function Blog() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div style={{ backgroundColor: "gray" }}>
      {isLoggedIn && <BlogEditor />}

      <BlogPosts />
    </div>
  );
}

export default Blog;
