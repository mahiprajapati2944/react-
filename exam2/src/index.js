import  ReactDOM  from "react-dom";
import Hook1 from "./Hook1";
import HookArray from "./HookArray";
import ImageChange from "./ImageChanges";
import Colorchange from "./Color";
import "./index.css"

ReactDOM.render(
  <>
  <Hook1/>
  <HookArray />
  <ImageChange />
  <Colorchange />
  </>,
  document.getElementById("root")
)