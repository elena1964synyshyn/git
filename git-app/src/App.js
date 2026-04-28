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
