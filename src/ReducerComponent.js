import React, { useReducer } from 'react';
import { initialState, indexReducer } from './reducer';

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(indexReducer, initialState);

  const onChange = (e) => {
    dispatch({
      type: 'INPUT',
      value: e.target.value,
    });
  };

  const increase = () => {
    dispatch({
      type: 'INCREASE',
    });
  };

  const decrease = () => {
    dispatch({
      type: 'DECREASE',
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="fill up"
        value={state.text}
        onChange={onChange}
      />
      <h1>{state.count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default ReducerComponent;
