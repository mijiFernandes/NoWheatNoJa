import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  StackItem,
  styled,
  Text,
  Typography,
  VStack,
} from "@channel.io/bezier-react";

const PaddingStack = styled(VStack)`
  box-sizing: border-box;
  padding: 16px;
`;

export default function QuizItem({ quiz, qid, onChangeSubmissions }) {
  const [submission, setSubmission] = useState(-1);
  function onChange(value) {
    var result = -1;
    quiz.choices.map((choice, id) => {
      if (choice === value) result = id;
      return true;
    });
    setSubmission(value);
    onChangeSubmissions(result, qid);
  }

  return (
    <PaddingStack spacing={16}>
      <StackItem>
        <Text typo={Typography.Size18}>{quiz.question}</Text>
      </StackItem>

      <StackItem>
        <RadioGroup
          direction="vertical"
          onValueChange={(value) => onChange(value)}
          spacing={0}
          value={submission}
        >
          {quiz.choices.map((choice, id) => (
            <Radio id={id} value={choice}>
              <Text typo={Typography.Size16}>{choice}</Text>
            </Radio>
          ))}
        </RadioGroup>
      </StackItem>
    </PaddingStack>
  );
}
