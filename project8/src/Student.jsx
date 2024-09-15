import { Component } from "react";
import Marks1 from "./Marks";

export default class Student1 extends Component{
    render(){
        console.log("Student - Component render [Child of App]")
        return<>
        <Marks1 />
        <h1>This is Student Component</h1>
        
        </>
    }
}
