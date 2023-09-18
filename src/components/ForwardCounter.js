import { useState, useEffect } from 'react';
import Card from './UI/Card/Card';
import useCounter from '../hooks/useCounter';


const ForwardCounter = () => {

  const counter =  useCounter(true);
  console.log('counter', counter)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
