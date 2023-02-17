import React from "react";
import { StackItem, Text, Typography, VStack } from "@channel.io/bezier-react";
import PostUserInfo from "./PostUserInfo";

export default function PostItem({ post }) {
  function truncatedText(text, maxLen) {
    const len = text.length;
    if (len >= maxLen) return text.slice(0, maxLen) + " ...";
    return text;
  }

  return (
    <VStack
      justify="start"
      align="stretch"
      spacing={16}
      className="post-item"
      onClick={() => (window.location.href = `/post/${post.uid}`)}
    >
      <StackItem>
        <PostUserInfo userId={post.writer} />
      </StackItem>

      <StackItem>
        <Text typo={Typography.Size18}>{truncatedText(post.content, 300)}</Text>
      </StackItem>
    </VStack>
  );
}
