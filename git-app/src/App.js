import { useState } from 'react';
import './App.css';
function App() {
  const [input, setInput] = useState('');
  const [item, setItem] = useState(['First Element']);
  const onClickHandler = () => {
    const newElement = 'new element';

    const updatedElement = [...item, newElement];
    setItem(updatedElement);
    setInput('');
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={onChangeHandler} value={input} />
        <ul>
          {item.map((element, index) => (
            <li key={'{element}${index}'}>
              {element}
              {index}
            </li>
          ))}
        </ul>
        <button onClick={onClickHandler}> add new element</button>
      </header>
    </div>
  );
}

export default App;

// import BookList from './Components/BookList';

// function App() {
//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h1> Бібліотека Стівена Кінга</h1>
//       <BookList />
//     </div>
//   );
// }

// export default App;
