import React, { useState } from "react";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  StackItem,
  styled,
  Text,
  TextArea,
  TextField,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import QuizForm from "../components/QuizForm";
import Header from "../components/Header";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 16px;
  border-radius: 16px;
`;

export default function CreatePage() {
  const [title, setTitle] = useState();
  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  const [content, setContent] = useState();
  function onChangeContent(e) {
    setContent(e.target.value);
  }
  const [questionCount, setQuestionCount] = useState(0);
  function onChangeQuestionCount(e) {
    if (questionCount < 3) setQuestionCount(questionCount + 1);
  }

  function onSubmit(e) {
    // TODO
    window.location.href = "/";
  }

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
      <div style={{ padding: "16px" }}>
        <PaddingStack spacing={16} style={{ backgroundColor: "white" }}>
          <StackItem>
            <Text typo={Typography.Size18}>자랑글 작성하기</Text>
          </StackItem>

          <StackItem>
            <TextField
              value={title}
              onChange={(e) => onChangeTitle(e)}
              placeholder="제목을 적어주세요"
            />
          </StackItem>

          <StackItem>
            <TextArea
              className="create-textarea"
              value={content}
              onChange={(e) => onChangeContent(e)}
              maxRows={10}
            />
          </StackItem>

          <StackItem>
            <input
              type="file"
              name="img"
              id="input-image"
              accept="image/*"
              multiple="multiple"
            />
          </StackItem>

          <StackItem>
            <Text typo={Typography.Size14}>
              문제를 적는 란입니다. 자랑을 잘 들었는지 확인할 수 있도록 멋진
              문제를 적어주세요!
            </Text>
          </StackItem>

          {questionCount >= 1 ? (
            <StackItem>
              <QuizForm id={0} />
            </StackItem>
          ) : (
            <></>
          )}
          {questionCount >= 2 ? (
            <StackItem>
              <QuizForm id={1} />
            </StackItem>
          ) : (
            <></>
          )}
          {questionCount >= 3 ? (
            <StackItem>
              <QuizForm id={2} />
            </StackItem>
          ) : (
            <></>
          )}

          <StackItem>
            <Button
              text="문제 추가"
              colorVariant={ButtonColorVariant.Blue}
              styleVariant={ButtonStyleVariant.Primary}
              onClick={onChangeQuestionCount}
            />
          </StackItem>

          <StackItem>
            <Button
              text="제출하기"
              colorVariant={ButtonColorVariant.Blue}
              styleVariant={ButtonStyleVariant.Primary}
              onClick={onSubmit}
            />
          </StackItem>
        </PaddingStack>
      </div>
    </div>
  );
}
