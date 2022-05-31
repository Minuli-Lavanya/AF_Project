import React, {useState} from 'react';
import axios from "axios";

const AddSupervisorRequest=()=>{

    const [researchTopic, setresearchTopic] = useState("");
    const [research_area, setresearch_area] = useState("");
    const [supervisor_name, setsupervisor_name] = useState("");
    const [Requestmessage, setRequestmessage] = useState("");
    const [GroupLeader, setGroupLeader] = useState("");
    const [GroupLeaderITnumber, setGroupLeaderITnumber] = useState("");
    const [sdate, setsdate] = useState("");


     function sendData(e){
       e.preventDefault();
        
         const newRequest = {

            researchTopic,research_area,supervisor_name,Requestmessage,GroupLeader,GroupLeaderITnumber,sdate
    
        };

        axios.post("http://localhost:8070/requestSupervisor/add", newRequest).then(()=>{
            alert("Request Supervisor")

        }).catch((err)=>{
            alert(err)
        });

    }

    return(
        <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a href="/" className='navbar-brand'>Shopping App</a>
                    </div>
                </nav>
            </header>

                <div>
                <h1>Add Item</h1>
                
                <div className ="container" id = "addSupplier-form1">

                    <form onSubmit={sendData}>

                        <div className="form-group">
                            <label htmlFor="name">Research Topic</label>
                            <input type="text" className="form-control" id="researchTopic" required
                                onChange = {(e) => {
                                    setresearchTopic(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Research Area</label>
                            <input type="text" className="form-control" id="research_area" required
                                onChange = {(e) => {
                                    setresearch_area(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Request message</label>
                            <input type="text" className="form-control" id="Requestmessage" required
                                onChange = {(e) => {
                                    setRequestmessage(e.target.value);
                                }}
                            />
                        </div> 
    

                        <div className="form-group">
                            <label htmlFor="name">Supervisor Name</label>
                            <input type="text" className="form-control" id="supervisor_name" required
                                onChange = {(e) => {
                                    setsupervisor_name(e.target.value);
                                }}
                            />
                        </div> 

                        <div className="form-group">
                            <label htmlFor="name">Group Leader</label>
                            <input type="text" className="form-control" id="GroupLeader" required
                                onChange = {(e) => {
                                    setGroupLeader(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Group Leader IT No</label>
                            <input type="text" className="form-control" id="GroupLeaderITnumber" required
                                onChange = {(e) => {
                                    setGroupLeaderITnumber(e.target.value);
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Date</label>
                            <input type="date" className="form-control" id="sdate" required
                                onChange = {(e) => {
                                    setsdate(e.target.value);
                                }}
                            />
                        </div>


                        <br></br>
                        <button type="submit" className="btn btn-outline-success" id = "">SAVE</button>
                    </form>

                </div>
                
                
            </div>
        </div>
        
    );
}

export default AddSupervisorRequest;