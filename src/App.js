import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './Todo.css';



const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleCompleted = (todoId) => {
    console.log('do: App.js: App: toggleCompleted: itemId: ', todoId);
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((todo) =>{
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (todoTask) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {task: todoTask, completed: false, id: Date.now()}
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((todo) => !todo.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
        tasks={this.state.tasks}
        toggleCompleted={this.toggleCompleted}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

export default App;