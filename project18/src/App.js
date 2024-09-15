import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

export default function App(){
  return<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route Index path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/*" element={<Error/>}/>
    </Route>
  </Routes>
  </BrowserRouter>  
  </>
}