import {Component} from "react";
import Student1 from "./Student";

export default class App1 extends Component{
constructor(props){
  super(props)
  this.state ={
    class1:"Data Sem4-A"
  }
  console.log("Constructor - will run first")
}
static getDerivedStateFromProps(props,state){
  console.log("App1 - get Derived State props")
  return null;
}

componentDidMount(){
  console.log("App1 - Mounted")
}

render(){
  console.log("App - Component rendered")

  return <>
  <Student1 />
  <h1>This is App component</h1>
  </>
}
}