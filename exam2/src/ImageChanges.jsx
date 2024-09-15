import {useState} from "react";
export default function ImageChange(){
    var [Img1, setImg1]=useState("Images/1.jpeg");
    var[Num,setNum]=useState(0);
    
    var aa = ["Images/2.png","Images/logo192.png"];

    var ImageChange1 = ()=>{
        if(Num<2){
        setImg1(aa[Num]);
        setNum(Num+1)
        }
        else{
            alert("No more images available")
        }
    }
      
    return<>
    <img src={Img1} alt="path" width="400px" height="300px"/>
    <button onClick={ImageChange1}>Img Change</button>
    </>
}