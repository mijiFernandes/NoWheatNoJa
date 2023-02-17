import React from "react";
import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  HStack,
  StackItem,
  styled,
} from "@channel.io/bezier-react";
import { Link } from "react-router-dom";

const PaddingStack = styled(HStack)`
  box-sizing: border-box;
  padding: 16px 32px;
`;

export default function Header() {
  return (
      <PaddingStack align="center" style={{ border: "solid 1px var(--gray)" }}>
        <StackItem grow shrink weight={1}>
          <img
            className="header-logo"
            src="/logo.png"
            alt="노휫노자"
            height={20}
            onClick={() => (window.location.href = "/")}
          />
        </StackItem>
        <StackItem>
          <Link to="/login">
            <Button
              text="로그인"
              colorVariant={ButtonColorVariant.Blue}
              styleVariant={ButtonStyleVariant.Primary}
            />
          </Link>
        </StackItem>
      </PaddingStack>
  );
}
