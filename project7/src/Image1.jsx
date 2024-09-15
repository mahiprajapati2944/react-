import A from "./Images/1.jpeg";
import B from "./Images/2.png";
//import B from "./video/1.mp4";
import C from "./Video/1.mp4";
import "./index.css";

var a1 = A;
var a2 = B;
//var b1 = B;
var c1 = C;

export default function Images12(){
    return <>
      <div className="id">
           <h5 className="id2">Data Sem4</h5>
      </div>
      <table className="id3">
        <tr>
            <td>
              <img src={a1} alt="path" width="200px" height="200px" />
            </td>
            <td>
              <img src={a2} alt="path" width="200px" height="200px" />
            </td>
            <td>
              <img src={a1} alt="path" width="200px" height="200px" />
            </td>
            
        </tr>
        <tr>
            <td>
                <video controls width="200px" height="100px">
                    <source src={c1} type="video/mp4" />
                </video>
            </td>
            <td>
                <video controls width="200px" height="100px">
                    <source src={c1} type="video/mp4" />
                </video>
            </td>
            <td>
                <video controls width="200px" height="100px">
                    <source src={c1} type="video/mp4" />
                </video>
            </td>
        </tr>
      </table>

    </>
}