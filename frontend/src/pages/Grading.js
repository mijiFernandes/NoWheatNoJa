import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { BezierProvider, LightFoundation, Text, Typography } from '@channel.io/bezier-react';
import { TextArea } from '@channel.io/bezier-react';
import { VStack } from '@channel.io/bezier-react';
import { StackItem } from '@channel.io/bezier-react';
import { Button } from '@channel.io/bezier-react';
import { ButtonColorVariant } from '@channel.io/bezier-react';
import { ButtonStyleVariant } from '@channel.io/bezier-react';
import { Link, useParams } from "react-router-dom";
import { HStack } from '@channel.io/bezier-react';

export default function Grading() {
    const container = document.getElementById('root')
    const root = createRoot(container)
    const routeParams = useParams();
    const grade = 1;
    const medal =  (grade === 3) ? '금메달!!!':(grade === 2) ? '은메달!!':(grade === 1) ? '동메달!':'노메달 ㅠㅠ'
    const [text, setText] = useState('');
    function onchange(e) {
        setText(e.target.value);
        console.log(e.target.value)
      };
    
    return (
    <div className="background-image2" style={{ width: '100vw', height: '100vh', backgroundSize: 'cover' }}>
        <VStack align="center" justify="center" spacing={20}>
            <StackItem
            marginBefore={150}
            >
            <Button
            size="XL"
            text={`${grade} 문제를 맞힌 당신은 ${medal}`}
            colorVariant={ButtonColorVariant.Blue}
            styleVariant={ButtonStyleVariant.Primary}
            />
            </StackItem>
            <StackItem
            size={50}
            style={{ width: '700px'}}
            marginBefore={50}
            >
            <div
            style={{
                width: 700
            }}
            >
            <TextArea
                autoFocus
                maxRows={10}
                minRows={6}
                value={text}
                onChange={(e) => onchange(e)}
                placeholder="축하 메세지를 남겨보세요!"
            />
            </div>
            </StackItem>
            <StackItem
            >
            <HStack align="center" justify="end">
                <StackItem>
                <Link to={`/post/${routeParams.id}`}>
                <Button
                text="Send"
                rightContent="send"
                colorVariant={ButtonColorVariant.Blue}
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
