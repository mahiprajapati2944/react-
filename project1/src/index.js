import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
 ReactDOM.render(
   //what you have to show,where you have to show
   <h1>This is my first app to react</h1>,
   document.getElementById("root")
 )

// ReactDOM.render(
//   /#_PURE_/
//   //what you have to show,where you have to show
//   React.createElement("h1", null, "This is my first app to react"), document.getElementById("root"));

// var h1 = document.createElement(h1);
// h1.innerHTML ="This tag is created by JS";
// document.getElementById("root").appendChild(h1);


ReactDOM.render(
  <div>
    <h1 className='id'>This is h1 tag</h1>
    <h2>This is h2 tag</h2>
    <p>This is paragraph tag</p>
    </div>,
    document.getElementById("root1")
)


//array element
ReactDOM.render([
  <h1>This is h1 tag</h1>,
    <h2>This is h2 tag</h2>,
    <p>This is paragraph tag</p>,
    <ol>
      <li>java</li>
      <li>javascript</li>
      <li>Python</li>
      <li>html</li>
    </ol>,

    <ul>
      <li>java</li>
      <li>javascript</li>
      <li>Python</li>
      <li>html</li>
  
    </ul>
],
document.getElementById("root2")
)
//React Fragment
ReactDOM.render(
  <React.Fragment>
  <h1>This is a react Fragment</h1>  
  <h3>H3 in react fragment</h3>
  <img src="logo192.png" alt="img problem" />
  </React.Fragment>,
  document.getElementById("root3")
)

