import React from 'react';
import Form from './components/TodoForm';
import List from './components/Todo';

const todoList = [
  {
    task: 'Do work',
    id: 12345678,
    completed: false,

  },
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoList: todoList,
    };
    this.onComplete = this.onComplete.bind(this);
  }

  newTask = {
    task:'',
    id: Date.now(),
    completed: false,
  };

  onComplete = (e) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
      if(item.id === e){
        return{ ...item, completed: !item.completed};
      }
      return item;
    }),
  });
  };

  onInputChange = (e) => (this.newTask.task = e.target.value);

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ todoList: [...this.state.todoList, this.newTask] });
    this.newTask = {
      task: '',
      id: Date.now(),
      completed: false,
    };
    document.querySelector('#newTask').value = '';
  };

  onClear = (e) => {
    e.preventDefault();
    this.setState({ 
      todoList: this.state.todoList.filter((item) => {
      return !item.completed;
    }),
  });
  };

  render() {
    return (
      <div className = 'container'>
        <h2>Readt Todo App!</h2>
        <List state={this.state.todoList} onComplete={this.onComplete}/>
        <Form onClear={this.onClear} newTask={this.newTask} onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
