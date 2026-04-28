import { useState } from 'react';
const List = () => {
  const [input, setInput] = useState('');
  const [item, setItem] = useState(['First Element']);
  const onClickHandler = input => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput('');
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <li key={`${element}${index}`}>
            {element}
            {index}
          </li>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}> add new element</button>
    </>
  );
};

export default List;
