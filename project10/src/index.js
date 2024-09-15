import ReactDOM from "react-dom";
import Buyer from "./Buyer";
import Seller from "./Seller";

ReactDOM.render(
  <>
  <Seller />
  </>,
  document.getElementById("root")
)

ReactDOM.render(
  <>
  <Buyer />
  </>,
  document.getElementById("root1")
)


ReactDOM.unmountComponentAtNode(document.getElementById("root"))