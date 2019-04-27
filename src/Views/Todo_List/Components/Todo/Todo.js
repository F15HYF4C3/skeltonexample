import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props)
  }
    render(){
        return (
            <div className="Todo">
              <h1>{this.props.todo}</h1>
              <button onClick={()=>{this.props.delete(this.props.index)}}>Delete</button>
            </div>
          );
    }
}

export default Todo;