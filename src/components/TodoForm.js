import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newToDo: "",
        };
    }
    handleChanges = (e) => {
        e.preventDefault();
        this.setState({newToDo: e.target.value});
    };

    render() {
        return (
         <form>
             <input

          type="text"
          name="todo"
          value={this.state.newToDo}
          onChange={this.handleChanges}
              />
             <button onClick={(e) => {
                 e.preventDefault();
                 this.props.addToDo(this.state.newToDo);
                 this.setState({newToDo: ""})
                }} > Create </button>
             <button onClick={this.props.clearCompleted}>Destroy</button>
         </form>
    
  
        );
      }
}

export default TodoForm;