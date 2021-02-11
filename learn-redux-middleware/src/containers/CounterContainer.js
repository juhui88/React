import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync, clickAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync, clickAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
      click={clickAsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync,
    clickAsync,
  }
)(CounterContainer);