import React, { useState } from "react";
import {
  Text,
  StackItem,
  VStack,
  Typography,
  TextField,
} from "@channel.io/bezier-react";

export default function QuizForm({ id }) {
  const [question, setQuestion] = useState();
  function onChangeQuestion(e) {
    setQuestion(e.target.value);
  }
  const [choices, setChoices] = useState();
  function onChangeChoices(e) {
    setChoices(e.target.value);
  }
  const [answer, setAnswer] = useState();
  function onChangeAnswer(e) {
    setAnswer(e.target.value);
  }

  return (
    <VStack spacing={16}>
      <StackItem>
        <Text typo={Typography.Size14}>문제{id + 1}</Text>
      </StackItem>

      <StackItem>
        <TextField
          value={question}
          onChange={(e) => onChangeQuestion(e)}
          placeholder="문제를 적어주세요"
        />
      </StackItem>
      <StackItem>
        <TextField
          value={choices}
          onChange={(e) => onChangeChoices(e)}
          placeholder="세미콜론(;)으로 구분해주세요"
        />
      </StackItem>
      <StackItem>
        <TextField
          value={answer}
          onChange={(e) => onChangeAnswer(e)}
          placeholder="문제의 답은 몇 번?"
        />
      </StackItem>
    </VStack>
  );
}
