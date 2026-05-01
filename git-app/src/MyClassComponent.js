import { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    //   super(props);
    //   this.state = { name: 'Olena' };
  }
  state = {
    todos: [],
    input: '',
  };
  addTask()=> {
    const value = e.target.value;
    this.setState({
      todos: [...this.state.todos, this.state.input],
    });
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  render() {
    return (
      <>
        <input value={this.state.input} onChange={this.onChangeHandler} />
        <button onClick={this.addTask}>Add Todo</button>
        {this.state.todos.map((todo) => (
          <p>{todo}</p>
        ))}
      </>
    );
  }
}

export default MyClassComponent;
