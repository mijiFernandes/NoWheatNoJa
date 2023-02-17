import React from "react";
import { styled, VStack } from "@channel.io/bezier-react";
import PostContent from "./PostContent";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 16px;
`;

export default function PostItem({ post }) {
  return (
    <PaddingStack
      justify="start"
      align="stretch"
      spacing={16}
      className="post-item"
      onClick={() => (window.location.href = `/post/${post.uid}`)}
    >
      <PostContent post={post} />
    </PaddingStack>
  );
}
