import "./Contact.css";

export default function About(){
    return<>

    <div className="new">
        <table align="center">
            <tr>
                <td>
                <h3 className="name1">
                    <center>Mahi Prajapati - 44</center>
                        </h3>

                    <div className="m1">
                   <div className="h1"> <center><b>Contact Us</b></center></div>
                    First Name:<input type="text" className="form-control"></input>
                    Middle Name:<input type="text" className="form-control"></input>
                    Last Name:<input type="text" className="form-control"></input>
                    College Name:<input type="text" className="form-control"></input>
                    Last Year Marks:<input type="text" className="form-control"></input>
                    Contact:<input type="text" className="form-control"></input>

                    </div>
                
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