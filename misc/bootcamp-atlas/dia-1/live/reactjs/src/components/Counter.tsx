import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={updateCount}>+</button>
    </div>
  );
};

export default Counter;
