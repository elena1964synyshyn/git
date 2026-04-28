import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const ToDosList = props => {
  console.log(props.newPropTodo);
  return (
    <>
      <div>{props.renderOneTodo}</div>
      <GrandChildComponent newPropTodo={props.renderOneTodo} />
    </>
  );
};

export default ToDosList;
