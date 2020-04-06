import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newToDo: ""
        }
    }
    handleChanges = e => {
        e.preventDefault();
        this.setState({newTodo: e.target.value})
    }

    render() {
        return (
        
         <form>
             <input

          type="text"
          name="todo"
          value={this.state.NewToDo}
          onChange={this.handleChanges}
             
             />
             <button onClick={this.handleAdd} >Create</button>
             <button onClick={this.handleClear} >Destroy</button>
         </form>
    
  
        );
      };
}

export default TodoForm;