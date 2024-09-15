import { Component } from "react";

class StateChange extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"ABC",

        }
    }

    handleClick= () => {
        this.setState({name:"xyz"})
    }
    render(){
        return<>
        <h1> My name is {this.state.name}</h1>
        <button onClick={this.handleClick}>change</button>
        </>
    }
}
export {StateChange};