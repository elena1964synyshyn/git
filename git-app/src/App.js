import './App.css';
import RenderComponent from './RenderComponent';
import CounterComponent from './CounterComponent';
import List from './List';
function App() {
  return (
    <div className="app">
      <header className="App-header">
        {' '}
        {/* <List />
//         <CounterComponent /> */}
        <RenderComponent />
      </header>
    </div>
  );
}

export default App;

// import BookList from './Components/BookList';
// import TodoList from './Components/TodoList';

// function App() {
//   return (
//     <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
//       <h1> Бібліотека Стівена Кінга</h1>
//       <BookList />
//       <TodoList />
//     </div>
//   );
// }

// export default App;
