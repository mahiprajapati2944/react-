import { Component } from "react";

class Firststate extends Component{
    state ={
        name:"First-State",
        age:12,
        city:"Ahmedabad",
        class12:this.props.class1
    }
    render(){
        return<>
        <h1>My name is {this.state.name}</h1>
        <h1>I am studying in {this.state.class12}</h1>
        </>
    }
}
export {Firststate};