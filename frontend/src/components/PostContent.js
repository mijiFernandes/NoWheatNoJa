import React from "react";
import {
  HStack,
  StackItem,
  Text,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import PostUserInfo from "../components/PostUserInfo";

export default function PostContent({ post }) {
  return (
    <VStack spacing={16}>
      <StackItem>
        <PostUserInfo userId={post.writer} />
      </StackItem>

      <StackItem>
        <Text typo={Typography.Size12}>{post.modifiedDate.slice(0, 10)}</Text>
      </StackItem>

      <StackItem>
        <Text typo={Typography.Size24}>{post.title}</Text>
      </StackItem>

      <StackItem>
        <Text typo={Typography.Size18}>{post.content}</Text>
      </StackItem>

      {post.images.length > 0 ? (
        <StackItem>
          <HStack
            justify="start"
            align="stretch"
            spacing={16}
            style={{ overflowX: "scroll" }}
          >
            {post.images.map((image) => (
              <StackItem>
                <div
                  style={{
                    width: 250,
                    height: 250,
                    border: "solid 1px var(--gray)",
                  }}
                ></div>
              </StackItem>
            ))}
          </HStack>
        </StackItem>
      ) : (
        <></>
      )}
    </VStack>
  );
}
