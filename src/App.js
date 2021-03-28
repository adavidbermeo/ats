import React, { Component } from 'react';
import './App.css';
import Tasks from './sample/tasks.json';
import TasksComponent from './components/TasksComponent';
//console.log(Tasks);

class App extends Component{

  state = {
    tasks: Tasks
  }

  render(){
    return  <div>
        <TasksComponent tasks={this.state.tasks} />
    </div>
  }
}


export default App;
