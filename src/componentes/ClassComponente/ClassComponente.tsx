import React from "react";

class ClassComponente extends React.Component<{ name: string }> {
    constructor(props: any){
        super(props)
        console.log('constructor reached')
    }

    state = {
        name: 'Mundo!'
    }

    componentDidMount() {
        console.log('componentDidMount reached')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate reached')
    }

    render() {
        console.log('render reached')
        return <div>
            <p>name: {this.state.name}</p>
            <button onClick={() =>{
                this.setState({ name: 'Ola Mundo!' })
            }}>Click here</button>
        </div>
    }
}

export default ClassComponente