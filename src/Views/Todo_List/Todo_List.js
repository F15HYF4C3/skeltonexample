import React, {Component} from 'react';
import './Todo_List.css';
import Todo from './Components/Todo/Todo';
import axios from 'axios';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[],
    }
  }
  componentDidMount(){
    axios.get('/api/todos')
      .then((res)=>{
        this.setState({
          todos:res.data
        })
      })
  }
  delete = (index) => {
    axios.delete(`/api/todos?index=${index}`)
      .then((res)=>{
        this.setState({
          todos:res.data
        })
      })
  }
  render(){
      const todos = this.state.todos.map((e, i)=>{
          return <Todo key={i} index={i} todo={e} delete={this.delete}/>
      })
      return (
        <div className="TodoList">
            {todos}
        </div>
        );
      }
}

export default TodoList;
