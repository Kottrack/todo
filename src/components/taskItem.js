import React, { Component } from 'react';
import './taskItem.css';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  removeItem(id) {
    this.props.removeItem(id);
  }

  changeStatus(id) {
    this.props.changeStatus(id)
  }

  render() {
    let currentStatus = this.props.status ? "Not done" : "Done";
    let currentStyle = this.props.status ? "cross-out" : "";
    return (
      <div className="taskItem">
        <p className={`taskItem__name ${currentStyle}`}>{this.props.name}</p>
        <p className="taskItem__text">{this.props.text}</p>
        <button className="taskItem__btn" onClick={() => this.removeItem(this.props.id)}>Remove</button>
        <button className="taskItem__btn" onClick={() => this.changeStatus(this.props.id)}>
          {currentStatus}</button>
      </div>
    );
  }
}

