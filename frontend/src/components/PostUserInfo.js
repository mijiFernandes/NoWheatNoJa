import React, { useState, useEffect } from "react";
import {
  Avatar,
  HStack,
  StackItem,
  Text,
  Typography,
} from "@channel.io/bezier-react";
import { userData } from "../data/data";

export default function PostUserInfo({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const postWriter = userData.filter((user) => user.uid === userId);
    if (postWriter) {
      setUser(postWriter[0]);
    }
  }, [userId]);

  if (!user) return <></>;
  return (
    <HStack justify="start" align="center" spacing={8}>
      <StackItem>
        <Avatar
          avatarUrl="https://cf.channel.io/thumb/200x200/pub-file/1/606d87d059a6093594c0/ch-symbol-filled-smiley-bg.png"
          size={24}
        />
      </StackItem>
      <StackItem>
        <Text typo={Typography.Size12}>{user.username}</Text>
      </StackItem>
    </HStack>
  );
}
