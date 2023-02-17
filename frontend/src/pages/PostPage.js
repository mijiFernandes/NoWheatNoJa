import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  Divider,
  HStack,
  StackItem,
  Text,
  TextField,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import PostUserInfo from "../components/PostUserInfo";
import { commentData, postData } from "../data/data";
import "./PostPage.css";

export default function PostPage() {
  const routeParams = useParams();
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const currentPost = postData.filter(
      (post) => post.hashid === parseInt(routeParams.id)
    );
    if (currentPost) {
      setPost(currentPost[0]);
    }
  }, [routeParams]);
  useEffect(() => {
    if (post) {
      const postComments = commentData.filter(
        (comments) => comments.post === post.uid
      );
      setComments(postComments);
    }
  }, [post]);

  if (!post)
    return (
      <VStack align="center">
        <StackItem>
          <Text typo={Typography.Size24}>피드가 존재하지 않습니다.</Text>
        </StackItem>
      </VStack>
    );
  else
    return (
      <VStack
        justify="start"
        align="stretch"
        spacing={16}
        className="post-view"
      >
        <StackItem>
          <PostUserInfo userId={post.writer} />
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
                      border: "solid 1px black",
                    }}
                  ></div>
                </StackItem>
              ))}
            </HStack>
          </StackItem>
        ) : (
          <></>
        )}

        <StackItem>
          <VStack justify="start" align="stretch" spacing={16}>
            <StackItem>
              <HStack justify="start" align="stretch" spacing={16}>
                <StackItem grow shrink weight={1}>
                  <TextField placeholder="댓글을 입력해주세요" />
                </StackItem>
                <StackItem>
                  <Button
                    leftContent="send"
                    colorVariant={ButtonColorVariant.Blue}
                    styleVariant={ButtonStyleVariant.Primary}
                  />
                </StackItem>
              </HStack>
            </StackItem>

            {comments.map((comment, id) => (
              <StackItem>
                <VStack spacing={16}>
                  {id > 0 ? (
                    <StackItem>
                      <Divider />
                    </StackItem>
                  ) : (
                    <></>
                  )}
                  <StackItem>
                    <PostUserInfo userId={comment.writer} />
                  </StackItem>
                  <StackItem>
                    <Text typo={Typography.Size14}>{comment.content}</Text>
                  </StackItem>
                </VStack>
              </StackItem>
            ))}
          </VStack>
        </StackItem>
      </VStack>
    );
}
