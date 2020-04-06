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
        
         <p> {this.props} </p>
    
  
        );
      };
}

// export default;