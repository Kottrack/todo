import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import TaskInput from './components/taskInput';
import TaskItem from './components/taskItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 0, status: true, name: "Create this ToDoList", text: "And fix errors"},
        {id: 1, status: false, name: "Implement state storage",
          text: "It is reset when the page is reloaded - not good"},
        {id: 2, status: false, name: "Expand functionality", text: "Make it more interesting"}
      ],

      nextId: 3
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  addItem(name, text) {
    let tasks = this.state.tasks.slice();
    tasks.push({id: this.state.nextId, status: false, name: name, text: text});
    let nextId = this.state.nextId + 1;
    this.setState({
      tasks: tasks,
      nextId: nextId
    });
  }

  removeItem(id) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  changeStatus(id) {
    let tasks = this.state.tasks.map(task => task.id === id ? {...task, status: !task.status} : task);
    this.setState({
      tasks: tasks
    });
  }

  render() {
    return (
      <div className="container">

        <Header />

        {this.state.tasks.map((task) => {
          return <TaskItem key={task.id} id={task.id} name={task.name} text={task.text} status={task.status}
                  removeItem={this.removeItem} changeStatus={this.changeStatus} /> })
        }

        <TaskInput name="" text="" addItem={this.addItem}/>

      </div>
    );
  }
}

export default App;
