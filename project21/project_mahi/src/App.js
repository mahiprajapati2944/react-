import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App(){
  return<>
  <BrowserRouter>
  <Routes>
    <Route>
        <Route path="/" element={<Navbar/>} >
        <Route index path="/home"  element={<Home/>}/>
        <Route index path="/contact"  element={<Contact/>}/>
        <Route index path="/about"  element={<About/>}/>
        
      </Route>
        
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}