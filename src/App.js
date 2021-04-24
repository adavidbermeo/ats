import React, { Component } from 'react';
import './App.css';
import Tasks from './sample/tasks.json';

// Components
import TasksComponent from './components/TasksComponent';
import TaskForm from './components/TaskForm';

class App extends Component{

  state = {
    tasks: Tasks
  }

  render(){
    return  <div>
        <TaskForm/>
        <TasksComponent tasks={this.state.tasks} />
    </div>
  }
}


export default App;
