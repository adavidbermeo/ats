import React, { Component } from 'react';
import TaskComponent from './TaskComponent';


class TasksComponent extends Component{
    render(){
        return( 
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Descripcion</th>
                            <th>Estado</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {this.props.tasks.map( 
                            task => <TaskComponent task={task} key={task.id} /> 
                        )} 
                    </tbody>
                </table>
            </div>  
        );
    }
}

export default TasksComponent;