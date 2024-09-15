import "./Contact.css";

export default function About(){
    return<>
    
    <div className="new">
        <table align="center">
            <tr>
                <td>
                    <div className="m1">
                   <div className="h1"> <center>Personal Details</center></div>
                    Name:<input type="text" className="form-control"></input>
                    Father Name:<input type="text" className="form-control"></input>
                    Mother Name:<input type="text" className="form-control"></input>
                    Surname:<input type="text" className="form-control"></input>
                    </div>
                
                </td>
                <td>
                <div className="h1"> <center>Educational Details</center></div>
                    School Name:<input type="text" className="form-control"></input>
                    12th school Name:<input type="text" className="form-control"></input>
                    Which College Did You Died:<input type="text" className="form-control"></input>
                    Last Semester Marks:<input type="text" className="form-control"></input>
                </td>
            </tr>

            <tr>
                <td>
                <button className="x btn btn-danger mt-2 " >Submit</button>
                <button className="y btn btn-success mt-2 ms-3" >Reset</button>
                </td>
            </tr>
        </table>
    </div>
    
   
    
    </>
}