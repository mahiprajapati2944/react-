import "./Home.css";
//import { Component } from "react";
import img1 from"./images/1.jpg";
var a1=img1;


export default function Home(){
    return<>
    <h3 className="name">
      <center>Mahi Prajapati - 44</center>
    </h3>
       <div className="container">
  <div className="row mt-5 ms-3">
    <div className="col-sm-4">
      <div className="cart1">
        <h3>Angular</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos<br/><br/> consequuntur sunt dolore sequi excepturi doloribus dicta saepe reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos</p>
      </div>
    </div>
    <div className="col-sm-4">
    <div className="cart1">
    <td>
            <img  className="img1" src={a1} alt="path" width="250px" height="150x"  />
            <button className="b1">Previous</button>
           <button className="b2">Next</button>
          </td> 
</div>
    </div>
    <div className="col-sm-4">
      <div className="cart1">
    <h3>Node JS</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos<br/><br/> consequuntur sunt dolore sequi excepturi doloribus dicta saepe reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos</p>


      </div>
      </div>

      

  </div>

  <div className="row mt-5 ms-3">
    <div className="col-sm-4">
      <div className="cart1">
        <h3>Java IDE</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos<br/><br/> consequuntur sunt dolore sequi excepturi doloribus dicta saepe reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos</p>

      </div>
    </div>
    <div className="col-sm-4">
    <div className="cart1">
    <h3>VS-Code</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos<br/><br/> consequuntur sunt dolore sequi excepturi doloribus dicta saepe reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos</p>


</div>
    </div>
    <div className="col-sm-4">
      <div className="cart1">
    <h3>Python IDE</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimosLorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos<br/><br/> consequuntur sunt dolore sequi excepturi doloribus dicta saepe reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt soluta dignissimos</p>

      </div>
      </div>

      

  </div>

  </div>
    </>
}