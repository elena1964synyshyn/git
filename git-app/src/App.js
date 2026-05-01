import './App.css';
import RenderComponent from './RenderComponent';
import CounterComponent from './CounterComponent';

import ToDosList from './ToDosList';
import List from './ListComponent';
function App() {
  return (
    <div className="app">
      <header className="App-header">
        {' '}
        {/* <List />
//         <CounterComponent /> */}
        <RenderComponent />
        <ToDosList />
      </header>
    </div>
  );
}

export default App;
