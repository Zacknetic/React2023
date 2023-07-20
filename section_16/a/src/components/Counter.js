import React from 'react';
import Card from "./Card";
import useCounter from "../hooks/use-counter";

export default function Counter ({ start, step, duration }) {
  const counter = useCounter(start, step, duration);

  return <Card>{counter}</Card>;
}
