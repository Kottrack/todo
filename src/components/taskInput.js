import React, { Component } from 'react';
import './taskInput.css';

export default class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: this.props.name,
      itemText: this.props.text
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  handleNameChange(e) {
    this.setState({itemName: e.target.value})
  }

  handleTextChange(e) {
    this.setState({itemText: e.target.value})
  }

  addItem(itemName, itemText) {
    if (itemName.length > 0) {
      this.props.addItem(itemName, itemText);
      this.setState({itemName: "", itemText: ""})
    }
  }

  render() {
    return (
      <form className="add-task">
        <input className="add-task__input" value={this.state.itemName} onChange={this.handleNameChange}
               type="text" maxLength="30" placeholder="Name ..." />
        <textarea className="add-task__input" value={this.state.itemText} onChange={this.handleTextChange}
                  rows="4" maxLength="120" placeholder="Description ..." />
        <button className="add-task__btn" onClick={
          (e) => {e.preventDefault(); this.addItem(this.state.itemName, this.state.itemText)}}>Add task</button>
      </form>
    );
  }
}
