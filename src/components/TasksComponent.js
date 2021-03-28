import React, { Component } from 'react';
import TaskComponent from './TaskComponent';


class TasksComponent extends Component{
    render(){
        return( 
            this.props.tasks.map( task => <TaskComponent task={task} key={task.id} /> 
           )
        );
    }
}

export default TasksComponent;