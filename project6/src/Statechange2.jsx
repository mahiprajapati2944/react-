import { Component } from "react";

class StateChange1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            num:0

        }
    }
    //increment operator
    handleClick =()=>{
        this.setState({num:this.state.num+1});
    }

    //dicrement operator
    handleClick1=() =>{
        this.setState({num:this.state.num-1});
    }


    render(){
        return<>
        <h1> {this.state.num}</h1>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClick1}>-</button>

        </>
    }
}
export {StateChange1};