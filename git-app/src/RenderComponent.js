import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const RenderComponent = () => {
  const toDos = [
    { id: 1, todo: 'firstTodo' },
    { id: 2, todo: 'secondTodo' },
    { id: 3, todo: 'thirdTodo' },
    { id: 4, todo: 'fourthTodo' },
  ];

  const myName = { name: 'Olena' };
  const myNameinArray = ['Olena'];

  return (
    <div>
      {/* {toDos.map(todo => {
              console.log(todo);
              // return <ToDosList key={todo.id} todo={todo.todo} />;
              return <ToDosList key={todo.id} renderOneTodo={todo.todo} />;
              })} */}
      <GrandChildComponent myName={myName} myNameinArray={myNameinArray} />
    </div>
  );
};

export default RenderComponent;
