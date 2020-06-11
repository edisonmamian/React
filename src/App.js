import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Felipe', age: 25},
      {name: 'Camila', age: 25},
      {name: 'Luisa', age: 18}
    ]
  }

  switchNameHandler = () => {
    //this.state.persons[2].name = 'Nicole';
    this.setState({
      persons: [
        {name: 'Felipe', age: 25},
        {name: 'Camila', age: 25},
        {name: 'Nicole', age: 18}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Mi primer cambio </h1>
        <button onClick={this.switchNameHandler}>Cambiar nombre</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Mi hobbie: Trotar</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement(
    //  'div',
    //  {className: 'App'},
    //  React.createElement('h1', null,'Mi primer cambio')
    //);
  }
}

export default App;
