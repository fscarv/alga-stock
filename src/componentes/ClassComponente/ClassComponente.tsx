import React from "react";

class ClassComponente extends React.Component<{ name: string }> {
    state = {
        name: 'Mundo!'
    }

    render() {
        return <div>
            <p>name: {this.state.name}</p>
            <button onClick={() =>{
                this.setState({ name: 'Ola Mundo!' })
            }}>Click here</button>
        </div>
    }
}

export default ClassComponente