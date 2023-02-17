import React from "react";
import { createRoot } from 'react-dom/client';
import { BezierProvider, LightFoundation, Text } from '@channel.io/bezier-react';
import { TextField } from '@channel.io/bezier-react';
import { VStack } from '@channel.io/bezier-react';
import { StackItem } from '@channel.io/bezier-react';
import { Button } from '@channel.io/bezier-react';
import { ButtonColorVariant } from '@channel.io/bezier-react';
import { ButtonStyleVariant } from '@channel.io/bezier-react';
import { HStack } from '@channel.io/bezier-react';
import { Link } from "react-router-dom";

export default function LoginPage() {
  const container = document.getElementById('root')
  const root = createRoot(container)

  return (
    <div className="background-image" style={{ height: '100vh', width: '100vw' }}>
      <VStack align="center" justify="center">
        <StackItem
          size={50}
        >
          <TextField
            allowClear
            autoFocus
            maxLength={25}
            onChange={function noRefCheck(){}}
            placeholder="Please write down your Email"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem
          size={50}
          style={{ width: '300px'}}
        >
          <TextField
            allowClear
            autoFocus
            maxLength={20}
            onChange={function noRefCheck(){}}
            placeholder="Please write down your PW"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem
          size={50}
        >
          <HStack spacing={50}>
            <StackItem
            >
              <Button
                text="Log-in"
                colorVariant={ButtonColorVariant.Green}
                styleVariant={ButtonStyleVariant.Primary}
            />
            </StackItem>
            <StackItem
              size={100}
            >
              <Link to="/signup">
                <Button
                  text="Sign-Up"
                  colorVariant={ButtonColorVariant.Green}
                  styleVariant={ButtonStyleVariant.Primary}
                />
              </Link>
            </StackItem>
        </HStack>
      </StackItem>
      </VStack>
    </div>
  );
}

