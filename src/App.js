import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

// Stateful component (aka Smart, Container components)
// Only want to have a couple (depends on how large the application is);
// always have less Stateful components than Stateless components
const app = props => {
    // useState allows us to add State management to functional components (React Hooks)
    // **Don't need to use class based components for State management, but it is the established way though
    // useState returns an array of 2 elements and ALWAYS 2 elements
    // 1st element: The current State (object that will be the State)
    // 2nd element: Always a function that allows us to update the State such that
    //  React is aware of it(will re-render the component)
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephanie', age: 26}
        ]
        // otherState: 'some other value'
    });

    console.log(personsState);

    const switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephanie', age: 27}
            ],
            // This setPersonsState replaces the personsState (old State) defined above, so we must manually include
            // all old State data above (this is one way of doing this)
            // otherState: personsState.otherState
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephanie', age: 26}
            ],
            // This setPersonsState replaces the personsState (old State) defined above, so we must manually include
            // all old State data above (this is one way of doing this)
            // otherState: personsState.otherState
        });
    }

    // More elegant to use useState
    // useState({otherState: 'some other value'});
    const [otherState, setOtherState] = useState('some other value')

    console.log(personsState, otherState);

    // Inline styling
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        // JSX
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            {/* this is one way of passing an argument (probably the more preferred way to do this) */}
            <button
                // Style property/style attribute made available by JSX
                style={style}
                onClick={switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
            <Person
                name={personsState.persons[0].name}
                age={personsState.persons[0].age}
            />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                // define click property which passes a switchHandler as a reference
                // we can pass methods as props to other components that DO NOT have direct access to the State
                // this is a common pattern
                // this is the other way of passing an argument **this can be inefficient
                click={() => switchNameHandler('Maximilian!!')}
            changed={nameChangedHandler}>My Hobbies: Racing
            </Person>
            <Person
                name={personsState.persons[2].name}
                age={personsState.persons[2].age}
            />
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;