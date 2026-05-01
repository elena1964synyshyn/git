// import { Component } from 'react';

// class MyClassComponent extends Component {
//   state = {
//     todos: [],
//     input: '',
//   };

//   addTask = () => {
//     this.setState({
//       todos: [...this.state.todos, this.state.input],
//       input: '',
//     });
//   };

//   onChangeHandler = e => {
//     const value = e.target.value;
//     this.setState({ input: value });
//   };

//   render() {
//     return (
//       <>
//         <input value={this.state.input} onChange={this.onChangeHandler} />
//         <button onClick={this.addTask}>Add Todo</button>
//         {this.state.todos.map((todo, index) => (
//           <p key={index}>{todo}</p>
//         ))}
//       </>
//     );
//   }
// }

import React from 'react';
const ListItemComponent = props => {
  <>
    return <li key={'${props.element}'}>{props.element}</li>;{props.children}
  </>;
};

export default ListItemComponent;
