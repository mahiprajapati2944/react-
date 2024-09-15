import { NavLink,Outlet}  from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return<>

    <nav className="navbar fixed-top  navbar-expand-lg navbar-light   ">
  <div className="container-fluid">
   <img src="https://www.gujaratuniversity.ac.in/images/Gujarat-university-logo1.png" className="img1" width="50px" height="50px" alt="path" />
   
    <div className="topRight">
    <ul className="topList">
            <li className="topListItem"><NavLink  to="/home" style={()=>{return {textDecoration:'none',fontFamily:'Calibri black'}}} >Home</NavLink></li>
            <li className="topListItem"><NavLink to="/about" style={()=>{return {textDecoration:'none', fontFamily:'Calibri black'}}}>About</NavLink></li>
            <li className="topListItem"><NavLink to="/contact" style={()=>{return {textDecoration:'none', fontFamily:'Calibri black'}}}>Contact Us</NavLink></li>   
        </ul>
    </div>
    
  </div>
  
</nav>
<Outlet/>

    </>
}