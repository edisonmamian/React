import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Mi primer cambio </h1>
        <Person name="Felipe" age="25">Mi hobbie: Trotar</Person>
        <Person name="Camila" age="25"/>
        <Person name="Luisa" age="18"/>
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
