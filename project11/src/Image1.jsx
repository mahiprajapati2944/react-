import A from "./Images/m8.jpg";
import B from "./Images/m11.webp";
import C from "./Images/m13.jpg";
import D from "./Images/m14.jpg";
import E from "./Images/1.jpeg";
import "./index.css";

var col={}
col.color="pitch";


var a1 = A;
var a2 = B;
var a3 = C;
var a4 = D;
var a5 = E;
//var b1 = B;
//var c1 = C;

export default function Images12(){
    return <>
    <body>
      <div className='cl cl1'>
     <h1> <span style={col}>The Best Photographer's Place</span></h1>
       </div>
       <div>
      <table  className="id3">
        <tr>
            <td>
              <img src={a1} alt="path" width="200px" height="150px" />
              <div> <h4> RS 300/- Unique </h4> </div>
            </td>            
            <td>
              <img src={a2} alt="path" width="200px" height="150px" />
              <div> <h4> RS 400/- Great </h4></div>
            </td>
            <td>
              <img src={a3} alt="path" width="200px" height="150px" />
              <div><h4> RS 200/- Best </h4></div>
            </td>
            
            <td>
              <img src={a4} alt="path" width="200px" height="150px" />
              <div><h4> Rs 260/- Awesome </h4></div>
            </td>
            <td>
              <img src={a4} alt="path" width="200px" height="150px" />
              <div><h4> RS 340/- </h4></div>
            </td>
        </tr>
        </table>
        </div>
      
        <div >
        <table className="id4">
        <tr>
            <td className="id5">
            <h3> About Photography </h3>
            <h5>Photographic" redirects here. For the image obtained see Photograph.For other user, see Photography (dismbiguation).Photographers at the Chicago Old Town Art Fair,1968 Photograpgyis the art,application,and practice of creating durable images by recording light ,either electronically by means of an image sensor, or chemically by meansof a light-sensitive matierial such as photographic film. It is employed in many fields of science,manufacturing(e.g,photolithography), and business as well as its more direct uses for art,film and video production,recreational purposes,hobby, and mass communication [1] Typically,a lens is used to fous the light reflected or emitted from object into a real image on the light-sensitive surface inside a camera during a times exposure . With an electronic image sensor, this produces an electronical charge at the pixel, which is electronically processed and stored in a digital image file for subsequent display or processing. The result with Photographic emulsion is an invisible latent image,which us later </h5>
            </td>
      


            <td className="id6">
            <h3> History Of Photography </h3>
            <h5>Photographic" redirects here. For the image obtained see Photograph.For other user, see Photography (dismbiguation).Photographers at the Chicago Old Town Art Fair,1968 Photograpgyis the art,application,and practice of creating durable images by recording light ,either electronically by means of an image sensor, or chemically by meansof a light-sensitive matierial such as photographic film. It is employed in many fields of science,manufacturing(e.g,photolithography), and business as well as its more direct uses for art,film and video production,recreational purposes,hobby, and mass communication [1] Typically,a lens is used to fous the light reflected or emitted from object into a real image on the light-sensitive surface inside a camera during a times exposure . With an electronic image sensor, this produces an electronical charge at the pixel, which is electronically processed and stored in a digital image file for subsequent display or processing. The result with Photographic emulsion is an invisible latent image,which us later </h5>

            </td>

            <td className="i">
              
              <img src={a5} alt="path" width="150px" height="100px" /> 
              <div><h2>Leave Your Deatails Here </h2></div>
            
            <lable class="demo"> Name </lable>
            <input type="text" placeholder="Enter Fname"></input>
            <lable class="demo"> E-mail </lable>
            <input type="e-mail" placeholder="Enter Fname"></input>
            <button >submit</button>
           
            </td>   
            
        </tr>
      </table>
      </div>
      </body>

    </>
}