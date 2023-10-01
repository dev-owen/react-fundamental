import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count 값이 변경될 때마다 실행됨');
  }, [count]); // count가 의존성 배열에 있으므로 count 값이 변경될 때만 실행됨

  return (
  
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default ExampleComponent;