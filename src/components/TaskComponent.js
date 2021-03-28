import React, { Component } from 'react';
import './TaskStyle.css';

class TaskComponent extends Component{

    styleCompleted(){
        return {
            fontSize: '18px',
            color: this.props.task.done ? 'green' : 'red',
            textDecoration: this.props.task.done ? 'line-through' : 'none' 
        }
    }

    render(){
        const { task } = this.props;

        return <div style={this.styleCompleted()}>  
            {task.title} - 
            {task.description} -
            {task.done} - 
            {task.id}
            <input type="checkbox" />
            <button>
                x
            </button>
        </div>
    }
}

const styleObject = {
    background: 'yellow',
    color: 'white',
    fontSize: '90px'
}

export default TaskComponent;