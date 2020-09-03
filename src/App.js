import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

//requires a render method and return JSX
//also must be exported
//can call other components multiple times
class App extends Component {
    //reserved word for special properties
    //if it changes, it will update the dom
    state = {
        persons: [
            {name: "Max" , age: 27},
            {name: "Man" , age: 29},
            {name: "Mad" , age: 22},
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <p>This is really working</p>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );

        //This is an alternative way to do a return method, but not the recommended
        // return React.createElement("div" , {className: "App"} , React.createElement("h1","null" ,"Does this work now"));
    }
}

export default App;
