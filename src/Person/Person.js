import React from 'react';
import './Person.css';

// Stateless component and Functional component
// Good practice to create as many Stateless components (aka Dump, Presentational components) as possible in application
const person = ( props ) => {
    // JSX
    return (
        <div className="Person">
            {/* onClick can be set to the switchHandler reference from App.js with props.click */}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* set up two way binding */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;