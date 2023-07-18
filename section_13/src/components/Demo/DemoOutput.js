import React from 'react';
import MyParagraph from './MyParagraph';

//the following is how you wrap a component in React.memo() to prevent it from re-rendering when the parent component re-renders
export default React.memo(function DemoOutput(props) {
// export default function DemoOutput(props) {
  console.log('DEMOOUTPUT RUNNING'); // This will run every time the component is re-evaluated

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
});

//React.memo comes at a cost, so you should only use it when you need to
//the resource downside of React.memo is that it stores a snapshot of the component and only re-renders it if the props change
//this means that if the component is re-rendered for some other reason, React.memo will prevent it from re-rendering
//the downside is that