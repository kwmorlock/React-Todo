import React from 'react';
import {v4 as uuidv4} from "uuid";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {todos:[
      
        {
          task: 'Organize Garage',
          id: uuidv4(),
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: uuidv4(),
          completed: false
        }],
        newToDo: "",
      // import of v4 after npm install uuid to assign unique numbers and then assigned to id
  
  };
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to Todo!</h2>
      </div>
    );
  }
}

export default App;
