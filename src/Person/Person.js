import React from 'react';

//can do some dynamic functions in the middle of a return using curly braces

//can make the argument whatever name you want in regard to properties like name and age
//children refers to any element
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name}! and I am {Math.floor(Math.random() * 30)} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;