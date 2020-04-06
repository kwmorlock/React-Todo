import React from "react";
import "./Todo.css";

class Todo extends React.Component {
//extends is a class that comes after extends
//has all the variables and methods that a react component has

render() {
    return (
    <p onClick={() => this.props.toggleComplete(this.props.todo.id) } className= {this.props.todo.completed ? "strike" : ""} >{this.props.todo.task}</p>
    )
  }
}


export default Todo;