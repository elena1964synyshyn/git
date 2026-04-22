import React from 'react';
import ToDosList from './ToDosList';
const RenderComponent = () => {
  const toDos = [
    { id: 1, todo: 'firstTodo' },
    { id: 2, todo: 'secondtTodo' },
    { id: 3, todo: 'thirdTodo' },
    { id: 4, todo: 'fourthTodo' },
  ];
  return (
    <div>
      {toDos.map(todo => {
        console.log(todo);
        return <ToDosList key={todo.id} todo={todo.todo} />;
      })}
    </div>
  );

  // return <div>{[1, 2, 3, 4].map(item => item)}</div>;

  // const firstRenderValue = false;
  // const secondRenderValue = true;
  // if (firstRenderValue) {
  //   return <p>one</p>;
  // }
  // if (secondRenderValue) {
  //   return <p>two</p>;
  // }
  return <p>three</p>;
  // return (
  //   <>
  //     {firstRenderValue.length ? <p>I'm firstRenderValue</p> : <p>hello</p>}
  //     {secondRenderValue && <p>I'm secondRenderValue</p>}
  //   </>
  // );
};

export default RenderComponent;
