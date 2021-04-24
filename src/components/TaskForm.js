import React, { Component } from 'react';

export default class TaskForm extends Component {

    /*onSubmit(event){
        console.log(event);
    }*/
    
    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name ,e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="title"
                    type="text" 
                    placeholder="Write a task" 
                    onChange={this.onChange}/>
                <br/>
                <br/>
                <textarea
                    name="description"
                    placeholder="Write a description"
                    onChange={this.onChange}>    
                </textarea>
                <input type="submit"/>
            </form>
        );
    }

}