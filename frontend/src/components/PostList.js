import React from "react";
import PostItem from "./PostItem";
import { VStack, StackItem } from "@channel.io/bezier-react";

export default function PostList({ posts }) {
  return (
      <VStack justify="start" align="stretch" spacing={16} class="post-list">
        {posts.map((post) => (
          <StackItem>
            <PostItem post={post} />
          </StackItem>
        ))}
      </VStack>

  );
}
