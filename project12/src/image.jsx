import { Component } from "react";
import Img1 from './Images/1.jpeg';
import Img2 from './Images/2.png';

class Image12 extends Component{
    constructor(props){
        super(props)
        this.state={
            path:Img1
        }
    }

    han = ()=>{
        this.setState({path:Img2})
    }

    han2 = ()=>{
        this.setState({path:Img1})
    } 

    render(){
        return<>

        <img src={this.state.path} alt="path" height="400px" width="600px"/><br/>
        <button onClick={this.han}>next</button>
        <button onClick={this.han2}>previous</button>
        </>
        
    }
}

export {Image12};