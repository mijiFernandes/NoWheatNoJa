import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StackItem,
  styled,
  Text,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import { userData, postData } from "../data/data";
import Header from "../components/Header";
import PostList from "../components/PostList";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 32px;
`;

export default function UserPage() {
  const routeParams = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const currentUser = userData.filter(
      (user) => user.uid === parseInt(routeParams.id)
    );
    if (currentUser) {
      setUser(currentUser[0]);
    }
  }, [routeParams]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const userPosts = postData
      .filter((post) => post.writer === parseInt(routeParams.id))
      .sort((a, b) => a.createdDate > b.createdDate);
    setPosts(userPosts);
  }, [routeParams]);

  if (!user || posts.length === 0)
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
      <div
        className="background-image4"
        style={{
          minHeight: "100vh",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Header />
        <div style={{ paddingTop: "32px" }}>
          <Text bold typo={Typography.Size18} marginAll={32}>
            {user.username}의 게시글
          </Text>
        </div>
        <PostList posts={posts} />
      </div>
    );
}
