import React, { useState } from "react";
import PostList from "../components/PostList";
import { postData } from "../data/data";
import "./MainPage.css";

export default function MainPage() {
  const [posts, setPosts] = useState(postData);
  console.log(posts);

  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
