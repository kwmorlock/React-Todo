import React from "react";

class Todo extends React.Component {
//extends is a class that comes after extends
//has all the variables and methods that a react component has

render() {
    return (
    <p>{this.props.todo}</p>
    )
  }
}


export default Todo;