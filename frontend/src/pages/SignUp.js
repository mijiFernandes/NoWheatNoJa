import React, { useState } from "react";
import { createRoot } from 'react-dom/client'
import { BezierProvider, LightFoundation, Text } from '@channel.io/bezier-react'
import { TextField } from '@channel.io/bezier-react';
import { VStack } from '@channel.io/bezier-react';
import { StackItem } from '@channel.io/bezier-react';
import { Button } from '@channel.io/bezier-react';
import { ButtonColorVariant } from '@channel.io/bezier-react';
import { ButtonStyleVariant } from '@channel.io/bezier-react';
import { Link } from "react-router-dom";

export default function SignUp() {
  const [textID, setTextID] = useState('');
  function onchangeID(e) {
      setTextID(e.target.value);
      console.log(e.target.value)
    };
  const [textPW, setTextPW] = useState('');
  function onchangePW(e) {
    setTextPW(e.target.value);
    console.log(e.target.value)
  };
  const [textUID, setTextUID] = useState('');
  function onchangeUID(e) {
    setTextUID(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div className="background-image1" style={{ height: '100vh', width: '100vw', backgroundSize: 'cover'  }}>
      <VStack align="center" justify="center">
        <StackItem
          size={50}
        >
          <TextField
            allowClear
            autoFocus
            maxLength={25}
            value={textID}
            onChange={(e) => onchangeID(e)}
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
            value={textPW}
            onChange={(e) => onchangePW(e)}
            placeholder="Please write down your PW"
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
            value={textUID}
            onChange={(e) => onchangeUID(e)}
            placeholder="Please write down your User Name"
            size={36}
            variant={0}
          />
        </StackItem>
        <StackItem
          size={50}
        >
          <Link to="/login">
            <Button
              leftContent="check"
              text="Sign Up"
              colorVariant={ButtonColorVariant.Green}
              styleVariant={ButtonStyleVariant.Primary}
            />
          </Link>
        </StackItem>
      </VStack>
    </div>




  );
}
