
import { Component } from "react";

export default class Seller extends Component{
componentDidMount(){
    console.log("component mounted...")
}
componentWillUnmount(){
    console.log("component unmounted...")
}

    render(){
        return <>
         <h1>I am Seller</h1>
        </>
    }
}