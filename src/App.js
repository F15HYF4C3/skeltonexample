import React, {Component} from 'react';
import './App.css';
import TodoList from './Views/Todo_List/Todo_List';
import axios from 'axios';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then((res)=>{
        console.log(res.data)
      })
  }
  render(){
    return (
      <div className="App">
        <TodoList/>
      </div>
    );
  }
}

export default App;
