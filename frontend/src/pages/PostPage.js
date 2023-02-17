import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  Divider,
  HStack,
  StackItem,
  styled,
  Text,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import PostUserInfo from "../components/PostUserInfo";
import { commentData, postData, resultData } from "../data/data";
import PostContent from "../components/PostContent";
import Header from "../components/Header";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 16px;
  border-radius: 16px;
`;

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
        (comment) => comment.post === post.uid
      );
      setComments(postComments);
    }
  }, [post]);

  function quizResultNum() {
    return [
      ...new Set(
        resultData
          .filter((result) => result.post === post.uid)
          .map((result) => result.viewer)
      ),
    ].length;
  }

  if (!post)
    return (
      <>
        <Header />
        <PaddingStack align="center">
          <StackItem>
            <Text typo={Typography.Size24}>피드가 존재하지 않습니다.</Text>
          </StackItem>
        </PaddingStack>
      </>
    );
  else
    return (
      <div className="background-image4" style={{ positoin: 'absolute', height: '100%', width: '100%', backgroundSize: 'cover'}}>
        <Header />
        <div style={{ padding: "16px"}}>
        <PaddingStack
          justify="start"
          align="stretch"
          spacing={16}
          className="post-view"
          style={{backgroundColor: "white"}}
        >
          <PostContent post={post} />

          <StackItem>
            {/* <HStack justify="start" align="stretch" spacing={16}>
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
              </HStack> */}
            <HStack align="center" spacing={16}>
              <StackItem size={100}>
                <Text typo={Typography.Size12}>
                  문제 푼 사람: {quizResultNum()}명
                </Text>
              </StackItem>
              <StackItem grow shrink weight={1}>
                <Text typo={Typography.Size12}>댓글: {comments.length}개</Text>
              </StackItem>
              <StackItem>
                <Link to={`/post/${routeParams.id}/quiz`}>
                  <Button
                    text="문제 풀으러 가기"
                    rightContent="arrow-right"
                    colorVariant={ButtonColorVariant.Blue}
                    styleVariant={ButtonStyleVariant.Primary}
                  />
                </Link>
              </StackItem>
            </HStack>
          </StackItem>

          <StackItem>
            <VStack justify="start" align="stretch" spacing={16}>
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
        </PaddingStack></div>
      </div>
    );
}
