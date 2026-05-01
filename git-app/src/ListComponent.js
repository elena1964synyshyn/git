import { useState } from 'react';
import ListItemComponent from './ListItemComponent';
import ButtonComponent from './ButtonComponent';

const ListComponent = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState(['First Element']);

  const onClickHandler = () => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput('');
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = e => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };
  const hendleDelete = () => {
    console.log('delete button clicked');
  };

  return (
    <>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
        placeholder="new task"
      />
      <h2>{item.length}</h2>
      <ul>
        {item.map((element, index) => (
          <ListItemComponent element={element} index={index}>
            {
              <ButtonComponent
                text={'delete'}
                onClick={hendleDelete}
                type={'button'}
              />
            }
          </ListItemComponent>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add To Do</button>
    </>
  );
};
