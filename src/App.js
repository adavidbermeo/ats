import React from 'react';
import './App.css';

class People extends React.Component{

  state = {
    show : true
  }

  toggleShow = () => {
   this.setState({show: !this.state.show});
  }

  render(){
    if(this.state.show){
      return(
        <div class="container-people">
          <h1>Name: {this.props.name}</h1>
          <h2>Lastname: {this.props.lastname}</h2>
          <button onClick={this.toggleShow}>Active ToggleShow</button>
        </div>
      );
    }else{
      return(
        <div class="no-data-container">
          <h2>There is no data</h2>
          <button onClick={this.toggleShow}>Active ToggleShow</button>
        </div>
      );
    }
  }
}


function App() {
  return (
    <div class="container-app">
        <People name="Angel David" lastname="Bermeo" />
        <People name="Maria Jose" lastname="Muñoz" />
        <People name="Juan Sebastian" lastname="Santanilla" />
        <People name="Sandra Jimena" lastname="Garcia" />
    </div>
  );
}

export default App;
