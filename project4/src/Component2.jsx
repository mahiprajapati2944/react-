import { Component } from "react";

class Student1 extends Component{
    col={
        color:"red",
        backgroundColor:"blue"
    }
    render(){
        return<>
        <h1 style={this.col}> My name is {this.props.name} my age is {this.props.age}</h1>
        <h1> This is class component</h1>
        <h1> This travelled via App.js</h1>
        </>
    }
}
export {Student1};