import React from 'react';

const GrandChildComponent = props => {
  return (
    <div>
      <p>Name: {props.myName?.name}</p>
      <p>Array: {props.myNameinArray?.join(', ')}</p>
    </div>
  );
};

export default GrandChildComponent;
