import { useState } from "react";
// Hooks are use to allow to use the state in function base component
export default function Hook1(){
    var Name =useState("AAAAAAA");
    var DataChange =()=>{

        Name[1]("BBBBB")    
    }

    return<>
    <h1>My name is {Name}</h1>
    <button onClick={DataChange}>Click</button>
    </>
}