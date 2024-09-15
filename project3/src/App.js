
import React,{Component} from 'react';

var abc="Data Section A";

//Simple Js Function base component
function Name1(){
  return <>
  <h1>This is my first function in App.js</h1>
  </>
};

//Arrow function base component

var Arrow= ()=>{
  return <>
  <h1>
   This is an arrow function
  </h1>
  </>
};

//Ananomose Function
var Ana=function(){
return <h1>
  This is Ananmose function
</h1>
};
// import React,{Component} from 'react';

class Student1 extends Component{
 render(){
  return <>
  <h1>This is a class base component</h1>
  </>
 }
}
export default abc;
export {Name1};
export {Arrow,Ana,Student1};