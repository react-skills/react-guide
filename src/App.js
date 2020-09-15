import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from "./UserOutput/UserOutput";

//requires a render method and return JSX
//also must be exported
//can call other components multiple times
//This is the standard method for writing states

class App extends Component {
    //reserved word for special properties
    //if it changes, it will update the dom
    state = {
        persons: {
            username: 'Toperman'
        }
    };
    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value})
    }


    switchNameHandler = () => {
        // console.log("was clicked");
        this.setState({
            persons: [
                {name: "Maxie", age: 27},
                {name: "Manie", age: 29},
                {name: "Madie", age: 22},
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <p>This is really working</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <UserInput/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
            </div>
        );

        //This is an alternative way to do a return method, but not the recommended
        // return React.createElement("div" , {className: "App"} , React.createElement("h1","null" ,"Does this work now"));
    }


    /*The instructions are:

    Create TWO new components: UserInput and UserOutput
    UserInput should hold an input element, UserOutput two paragraphs
    Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    Pass a username (of your choice) to UserOutput via props and display it there
    Add state to the App component (=> the username) and pass the username to the UserOutput component
    Add a method to manipulate the state (=> an event-handler method)
    Pass the event-handler method reference to the UserInput component and bind it to the input-change event
    Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    Add two-way-binding to your input (in UserInput) to also display the starting username
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets*/


}

export default App;
