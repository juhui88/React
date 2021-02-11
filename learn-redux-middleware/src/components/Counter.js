import React from 'react';

const Counter = ({ onIncrease, onDecrease, number, click }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={click}>클릭</button>
    </div>
  );
};

export default Counter;