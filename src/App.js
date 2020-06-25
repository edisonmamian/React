import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {id: 'asfs1', name: 'Felipe', age: 25},
      {id: 'essdas6', name: 'Camila', age: 25},
      {id: 'ascerad2', name: 'Luisa', age: 18}
    ],
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    //crea una copia y no pasa la referencia
    //const persons = this.state.persons.slice();
    //La forma actual mas comun de hacer el slice
    const persons = [...this.state.persons];
    //Elimina un elemento de la lista en el indice entregado
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    //Guarda una copia del valor de showPersons
    const doesShow = this.state.showPersons;
    //Cambia showPersons por la negacion de doesShow
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      // Mostrar datos de una lista dinamicamente
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Mi primer cambio </h1>
        <button
          onClick={this.togglePersonsHandler}
        >
          Cambiar nombre
        </button>

        {persons}

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
