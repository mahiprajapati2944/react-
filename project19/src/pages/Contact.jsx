export default function Contact(){
    return<>
    <h1>
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div>
                    <img src="logo192.png" className="img1 rounded mx-auto d-block" width="75px"  alt="path"/>
                    </div>
                    Name:<input type="text" className="form-control"></input>
                    MiddleName:<input type="text" className="form-control"></input>
                    LastName:<input type="text" className="form-control"></input>
                    Contact:<input type="text" className="form-control"></input>
                    <button className="btn btn-danger mt-2 " >Submit</button>
                    <button className="btn btn-success mt-2 ms-3" >Save</button>
                </div>
            </div>
        </div>
    </h1>
    </>
}