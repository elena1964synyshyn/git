import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      todos: [],
    };
  }

  onChangeHandler = e => {
    this.setState({ input: e.target.value });
  };

  onClickHandler = () => {
    if (this.state.input.trim() === '') return;
    this.setState(prevState => ({
      todos: [...prevState.todos, prevState.input],
      input: '',
    }));
  };

  onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      this.onClickHandler();
    }
  };

  render() {
    const { input, todos } = this.state;
    return (
      <div style={{ marginTop: '40px' }}>
        <h2>To Do List</h2>
        <input
          value={input}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          placeholder="new task"
        />

        <p> {todos.length}</p>
        <ul
          style={{
            listStyle: 'disc',
            textAlign: 'left',
            display: 'inline-block',
          }}
        >
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <br />
        <button onClick={this.onClickHandler}>Add TO DO</button>
      </div>
    );
  }
}

export default TodoList;
