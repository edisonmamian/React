
import React from 'react';

import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}> Hola, soy {props.name} y tengo {props.age} años!! </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change}/>
    </div>
  )
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
