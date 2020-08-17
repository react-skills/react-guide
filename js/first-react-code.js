//The start of using JSX
//This is the first react component that calls the html using selectors.
//Similar to appending stuff
//This works, but babel needs to be used
function Squad() {
    return( <div class="squad">
            <h1>{props.name}</h1>
            <p>Certified Member {props.num}</p>
        </div>
    );
}

//This calls the squad function and updates using the selectors as input.
ReactDOM.render(<Squad name={"Brian"} num={1}/>,
    //This pushes everything to the selector, in this case the id of p1 from html
    document.querySelector("#p1"));

ReactDOM.render(<Squad name={"Jesse"} num={2}/>,
    document.querySelector("#p2"));