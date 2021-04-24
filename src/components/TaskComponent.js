import React, { Component } from 'react';
import './TaskStyle.css';
import PropTypes from 'prop-types';

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

        return  <tr style={this.styleCompleted()}>
            <td> {task.title} </td> 
            <td> {task.description} </td> 
            <td> {task.done} </td>
            <td> {task.id} </td>
        </tr>
        
    }
}

TaskComponent.propTypes = {
    task: PropTypes.object.isRequired
}

/*const styleObject = {
    background: 'yellow',
    color: 'white',
    fontSize: '90px'
}*/

export default TaskComponent;