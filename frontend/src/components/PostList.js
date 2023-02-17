import React from "react";
import PostItem from "./PostItem";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  VStack,
  StackItem,
} from "@channel.io/bezier-react";
import { Link } from "react-router-dom";

export default function PostList({ posts }) {
  return (
    <VStack justify="start" align="stretch" spacing={16} class="post-list">
      <StackItem>
        <Link to="/create">
          <Button
            text="자랑글 작성하기"
            colorVariant={ButtonColorVariant.Blue}
            styleVariant={ButtonStyleVariant.Primary}
          />
        </Link>
      </StackItem>
      {posts.map((post) => (
        <StackItem>
          <PostItem post={post} />
        </StackItem>
      ))}
    </VStack>
  );
}
