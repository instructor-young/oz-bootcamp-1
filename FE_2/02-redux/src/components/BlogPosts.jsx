import React from "react";
import { useSelector } from "react-redux";

function BlogPosts() {
  const posts = useSelector((state) => state.blog.posts);

  return (
    <section>
      <h2>작성된 글 목록</h2>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.content}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default BlogPosts;
