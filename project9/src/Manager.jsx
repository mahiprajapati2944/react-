import { Component } from "react";
export default class Manager extends Component{
    constructor(props){
        super(props)
        this.state={
            mid:this.props.eid
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerived - Run...........")
        console.log(props,state)
        if(props.eid !== state.mid){
            return{mid:props.eid}
        }
        return null;
    }

    shouldComponentUpdate(nextprops,nextstate){
        if(this.state.mid<430){
            console.log("Manager - should component updated...")
            console.log(nextprops,nextstate)
            return true
        }
        console.log();
        return false;
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("getSnap - done....");
        console.log(prevprops,prevstate)
        return 11;
    }

    componentDidMount(){
        console.log("component -mount");
    }
    render(){
        return<>
        <h1>This is Manager</h1>
        <h1>mid:{this.state.mid}</h1>
        </>
    }
}
