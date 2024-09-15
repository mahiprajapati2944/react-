import { Component } from "react";
import img1 from"./images/1.jpg";
import img2 from"./images/2.jpg";


class Imagechange extends Component{
    constructor(props){
        super(props)
        this.state={
            path:img1
        }
    }
   Imagechange =()=>{
    this.setState({path:img2})
   } 

   

   render(){
    return<>
    <img src={this.state.path} alt="path"/>
    <button onDoubleClick={this.Imagechange}>Click here</button>
    </>
   }
}

export {Imagechange};



