import { NavLink,Outlet}  from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
    return<>

    <nav className="navbar fixed-top ">
  
   
    <div className="topRight">
    <ul className="topList">
            <li className="topListItem"><NavLink  to="/home" >Home</NavLink></li>
            <li className="topListItem"><NavLink to="/about" >About</NavLink></li>
            <li className="topListItem"><NavLink to="/contact">Contact</NavLink></li>   
        </ul>
    </div>
    
  
  
</nav>
<Outlet/>

    </>
}