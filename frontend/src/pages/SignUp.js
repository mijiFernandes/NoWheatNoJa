import React from "react";
import { createRoot } from "react-dom/client";
import {
  BezierProvider,
  LightFoundation,
  Text,
} from "@channel.io/bezier-react";
import { TextField } from "@channel.io/bezier-react";
import { VStack } from "@channel.io/bezier-react";
import { StackItem } from "@channel.io/bezier-react";
import { Button } from "@channel.io/bezier-react";
import { ButtonColorVariant } from "@channel.io/bezier-react";
import { ButtonStyleVariant } from "@channel.io/bezier-react";

export default function SignUp() {
  return (
    <div style={{ backgroundColor: "white", zIndex: 5 }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          opacity: "0.5",
        }}
      >
        <img src="http://localhost:3000/5.jpeg" />
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <VStack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
        align="center"
      >
        <StackItem size={50} style={{ width: "300px" }}>
          <TextField
            ref={{
              current: "[Circular]",
            }}
            allowClear
            autoFocus
            maxLength={25}
            onChange={function noRefCheck() {}}
            placeholder="Please write down your Email"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem size={50} style={{ width: "300px" }}>
          <TextField
            ref={{
              current: "[Circular]",
            }}
            allowClear
            autoFocus
            maxLength={20}
            onChange={function noRefCheck() {}}
            placeholder="Please write down your PW"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem size={50} style={{ width: "300px" }}>
          <TextField
            ref={{
              current: "[Circular]",
            }}
            allowClear
            autoFocus
            maxLength={25}
            onChange={function noRefCheck() {}}
            placeholder="Please write down your User Name"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem>
          <Button
            text="Sign Up"
            colorVariant={ButtonColorVariant.Green}
            styleVariant={ButtonStyleVariant.Primary}
          />
        </StackItem>
      </VStack>
    </div>
  );
}
