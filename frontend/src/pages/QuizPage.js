import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PostUserInfo from "../components/PostUserInfo";
import {
  Button,
  HStack,
  StackItem,
  styled,
  Text,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import { postData, quizData } from "../data/data";
import { useParams } from "react-router-dom";
import QuizItem from "../components/QuizItem";
import { Link } from "react-router-dom";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 32px;
`;

export default function QuizPage() {
  const routeParams = useParams();
  const [post, setPost] = useState();
  const [quizzes, setQuizzes] = useState([]);
  const [submissions, setSubmissions] = useState([-1, -1, -1]);
  useEffect(() => {
    const currentPost = postData.filter((post) => (post.uid = routeParams.id));
    if (currentPost) {
      setPost(currentPost[0]);
    }

    const currentQuiz = quizData.filter((quiz) => (quiz.post = routeParams.id));
    if (currentQuiz) {
      setQuizzes(currentQuiz[0]);
    }
  }, [routeParams]);

  function onChangeSubmissions(value, id) {
    var oldSubmissions = submissions;
    oldSubmissions[id] = value;
    setSubmissions(oldSubmissions);
    console.log(submissions);
  }

  if (!post || !quizzes) return <></>;
  return (
    <div className="background-image4" style={{ positoin: 'absolute', height: '100%', width: '100%', backgroundSize: 'cover'}}>
      <Header />
      <PaddingStack>
        <StackItem>
          <HStack align="center" spacing={16}>
            <StackItem>
              <PostUserInfo userId={post.writer} />
            </StackItem>
            <StackItem>
              <Text typo={Typography.Size16}>의 퀴즈를 풀어보세요!</Text>
            </StackItem>
          </HStack>

          <VStack
            justify="start"
            align="stretch"
            spacing={16}
            className="post-list"
          >
            {quizzes.quiz.map((quiz, id) => (
              <StackItem>
                <QuizItem
                  quiz={quiz}
                  qid={id}
                  onChangeSubmissions={onChangeSubmissions}
                />
              </StackItem>
            ))}
            <StackItem
            marginAfter={100}>
              <Link to={`/grade/${routeParams.id}`}>
              <Button text="제출하기" />
              </Link>
            </StackItem>
          </VStack>
        </StackItem>
      </PaddingStack>
    </div>
  );
}
