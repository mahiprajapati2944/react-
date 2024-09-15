import { Component } from "react";
import Manager from "./Manager";

export default class Employee extends Component{
    constructor(props){
        super(props)
        this.state={
            eid:420
        }
    }
    handler=()=>{
        console.log("Button Click")
        this.setState({eid:this.state.eid+1})
    }

    render(){
        console.log("Emplyee - component rendered")
        return<>
        <h1>This is Employee and my eid id {this.state.eid}</h1>
        <Manager eid={this.state.eid}/>
        <button onClick={this.handler}>Update</button>
        </>
    }
}