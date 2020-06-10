
import React from 'react';

const person = (props) => {
  return <p> Hola, soy {props.name} y tengo {props.age} años!! </p>
}

export default person;

/*
 Cuando se usa clases para pasar información se hace así:

 class Person extends Component {
  render() {
    return <p> yo soy {this.props.name} </p>
  }
}
}
*/
