import React, { useState } from "react";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { postData } from "../data/data";
import "./MainPage.css";

export default function MainPage() {
  const [posts, setPosts] = useState(
    postData.sort((a, b) => a.createdDate > b.createdDate)
  );

  return (
    <>
      <Header />
      <PostList posts={posts} />
    </>
  );
}
