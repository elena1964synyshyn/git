import HelloWorldComponent from './HelloWorldComponent';
import './App.css';
import MyClassComponent from './MyClassComponent';

//   const hello = 'Hello World';

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{hello}</p>
//         {<HelloWorldComponent />}
//         <MyClassComponent />
//       </header>
//     </div>
//   );
// }

import BookList from './components/BookList';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1> Бібліотека Стівена Кінга</h1>
      <BookList />
    </div>
  );
}

export default App;
