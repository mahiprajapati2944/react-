//MahiPrajapati//44//Data-A
import A from "./Images/1.jpeg";
import "./index.css";
import vid from "./Video/new.mp4";
var b=vid;
var a1 = A;



export default function Images12(){
    return <>
    <body>
      <div className='cl cl1' >
     <h2>React Official Documentation</h2>
       </div>
       
       <div>
      <table  className="i1">
        <tr>
        <td className="i2" width="300px" height="200px">
            <h3> Intoduction To The React  </h3>
            <h4>Note: Background color for this should be aquamaria </h4>
            <h5>Reactjs is declarative,efficient and flexible javascript library for building reusalble ui components. It is an open-source ,component-based front end libarary responsible only for view layer of the application It was created by Jorden walker,who was a software engineer at facebook . It was intially developed and maintained by facebook. It was later used in its products like Whatsapp & Instragram. Facebook developed Reactjs in 2011 in its newsfeed section,</h5>
            </td>
        <td className="i3" width="450px" height="200px">
            <h3> Note: Background color for this should be aquamaria  </h3>
            <h5>Reactjs is declarative,efficient and flexible javascript library for building reusalble ui components. It is an open-source ,component-based front end libarary responsible only for view layer of the application It was created by Jorden walker,who was a software engineer at facebook . It was intially developed and maintained by facebook. It was later used in its products like Whatsapp & Instragram. Facebook developed Reactjs in 2011 in its newsfeed section, but it was released to the public in the month of May 2013 who was software engineer at facebook It was intially developed and maintained by facebook and was later used in products like Whatsapp & Instragrm. facebook developed Reactjs in 2011 in its newsfeed section, but it was released to the public the month of May 2013.</h5>
            </td>
        <td>
            <h3 className="video"> Use Vidio For Guidance  </h3>
            <video controls width="300px" height="200px">
            <source src={b} type="Video/mp4"/>
            </video>
            </td>
        </tr>

        </table>
        </div>

        
        <div >
        <table className="cl2">
        <tr>
        <td className="i4">
        <h4>Note: Background color for this is blue </h4>
            <img src={a1} alt="path" width="300px" height="200px"/>
          </td> 

          <td>
            <h3 className="video"> React Installation for Guide Vidio  </h3>
            <video controls width="450px" height="200px">
            <source src={b} type="Video/mp4"/>
            </video>
            </td>
      
            <td className="i5" width="300px" height="200px">
            <h3> Intoduction To The React  </h3>
            <h4>Note: Background color for this should be aquamaria </h4>
            <h5>Reactjs is declarative,efficient and flexible javascript library for building reusalble ui components. It is an open-source ,component-based front end libarary responsible only for view layer of the application It was created by Jorden walker,who was a software engineer at facebook . It was intially developed and maintained by facebook. It was later used in its products like Whatsapp & Instragram. Facebook developed Reactjs in 2011 in its newsfeed section,</h5>
            </td>
        </tr>
      </table>
      </div>
      </body>

    </>
}