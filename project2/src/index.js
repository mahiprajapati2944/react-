import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 //var time1=11;
var time1=new Date();
time1=time1.getHours();
var a="";
var col={}

if(time1>=1 && time1<=12){

col.color="blue";
a="Good Morning";
}

else if(time1>=12 && time1<=17){
a="Good Afternoon";

col.color="blue";
}

else if(time1>17 && time1<=19){
a="Good Evening";
col.color="blue";
}

else if(time1>19 && time1<=24){
a="Good Night";

col.color="blue";
}

ReactDOM.render(
<div className='cl cl1'>
<h1>Hello sir/madam,<span style={col}> {a}</span></h1>
</div>,

document.getElementById("root")
)