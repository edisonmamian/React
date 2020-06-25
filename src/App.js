import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {name: 'Felipe', age: 25},
      {name: 'Camila', age: 25},
      {name: 'Luisa', age: 18}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //this.state.persons[2].name = 'Nicole';
    this.setState({
      persons: [
        {name: 'Felipe', age: 25},
        {name: 'Camila', age: 25},
        {name: newName, age: 18}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Felipe', age: 25},
        {name: event.target.value, age: 25},
        {name: 'Nicole', age: 18}
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: true
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Mi primer cambio </h1>
        <button
          onClick={this.togglePersonsHandler}
        >
          Cambiar nombre
        </button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            >
              Mi hobbie: Trotar
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              change={this.nameChangeHandler}
            />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
              click={this.switchNameHandler.bind(this, 'Stephany')}
            />
          </div> : null
        }
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
