import { Component } from "react";
import img1 from"./images/1.jpg";
import img2 from"./images/2.jpg";

class Img1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            path:img1

        }
    }
    //increment operator
    handleClick =()=>{
        this.setState({path:img1});
    }

    //dicrement operator
    handleClick1=() =>{
        this.setState({path:img2});
    }


    render(){
        return<>
        <img src={this.state.path} alt="path" width="200px" height="200px"/><br/>
        <button onClick={this.handleClick}>Back Img</button>
        <button onClick={this.handleClick1}>Next Img</button>
        {/* <img src={this.state.path} alt="path"/> */}
        {/* <button onDoubleClick={this.Imagechange}>Click here</button> */}
        </>
    }
}
export {Img1};