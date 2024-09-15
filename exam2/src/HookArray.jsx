import { useState } from "react";

export default function HookArray(){
    var [Hobbies,setHobbies]=useState("Cricket")
    var [Num, setNum]=useState(0);

    var Change =()=>{
        var aa=["Badminton","Chess","Rummy"]
        setHobbies(aa[Num]);
        setNum(Num+1)
    }

    return<>
    <h1>{Hobbies}</h1>
    <h1>{Num}</h1>
    <button onClick={Change}>Change1</button>
    </>
}