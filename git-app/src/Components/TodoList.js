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
        <p>Кількість завдань: {todos.length}</p>
        <input
          value={input}
          onChange={this.onChangeHandler}
          onKeyDown={this.onKeyDownHandler}
          placeholder="Введіть завдання..."
        />
        <button onClick={this.onClickHandler}>Додати</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
