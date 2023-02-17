import React from "react";
import { createRoot } from "react-dom/client";
import { TextField } from "@channel.io/bezier-react";
import { VStack } from "@channel.io/bezier-react";
import { StackItem } from "@channel.io/bezier-react";
import { Button } from "@channel.io/bezier-react";
import { ButtonColorVariant } from "@channel.io/bezier-react";
import { ButtonStyleVariant } from "@channel.io/bezier-react";
import { HStack } from "@channel.io/bezier-react";

// {/* <img src="http://localhost:3000/5.jpeg" /> */}
//       {/* <div style={{width: "100%", height: "100vh", position: "absolute", top: 0, left: 0, zIndex: 1 }}></div> */}

export default function LoginPage() {
  return (
    <div
      className="background-image"
      style={{ height: "100vh", width: "100vw" }}
    >
      <VStack align="center" justify="center">
        <StackItem size={50}>
          <TextField
            allowClear
            autoFocus
            maxLength={25}
            placeholder="Please write down your Email"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem size={50} style={{ width: "300px" }}>
          <TextField
            allowClear
            autoFocus
            maxLength={20}
            onChange={function noRefCheck() {}}
            placeholder="Please write down your PW"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem size={50}>
          <HStack spacing={50}>
            <StackItem>
              <Button
                text="Log-in"
                colorVariant={ButtonColorVariant.Green}
                styleVariant={ButtonStyleVariant.Primary}
              />
            </StackItem>
            <StackItem size={100}>
              <Button
                text="Sign-Up"
                colorVariant={ButtonColorVariant.Green}
                styleVariant={ButtonStyleVariant.Primary}
              />
            </StackItem>
          </HStack>
        </StackItem>
      </VStack>
    </div>
  );
}
