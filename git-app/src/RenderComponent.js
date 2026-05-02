import React from 'react';
import GrandChildComponent from './GrandChildComponent';

const RenderComponent = () => {
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
