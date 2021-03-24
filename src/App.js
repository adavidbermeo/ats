import React, { Component } from 'react';
import './App.css';
import Tasks from './sample/tasks.json';
import TaskComponent from './components/TaskComponent';
//console.log(Tasks);

class App extends Component{

  state = {
    tasks: Tasks
  }

  render(){
    return  <div>
      {this.state.tasks.map((e)=> <p key={e.id}> 
        {e.title} - {e.description} - {e.done} - {e.id}
        <TaskComponent />
       </p>)}
    </div>
  }
}


export default App;
