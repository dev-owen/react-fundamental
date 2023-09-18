import React, { useEffect, useState } from 'react';

const useCounter = (isForward) => {
   
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1(isForward ? 1 : -1));
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return counter;

};

export default useCounter;