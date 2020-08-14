//This is a react template to get startup to work the first component
'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// ... the starter code you pasted ...

const domContainer = document.querySelector('#first');
ReactDOM.render(e(LikeButton), domContainer);

