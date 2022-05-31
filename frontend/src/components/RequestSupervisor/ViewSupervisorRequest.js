import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const ViewSupervisorRequest=()=>{

    const [requestSupervisor, setrequestSupervisor] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8070/requestSupervisor/`)
            .then((response) => {
                setrequestSupervisor(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`http://localhost:8070/requestSupervisor/`)
            .then((getData) => {
                setUser(getData.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:8070/requestSupervisor/delete/${_id}`)
        .then(() => {
            getData();
        })
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
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-requestSupervisor-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>View request</h2>
                </div>
                              
                
                <br/>
                
                    
                    <table bordered hover size="sm" style={{width: "1150px", marginLeft: "300px", borderRadius: "12px", boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)"}}>
                        
                        <thead>
                            <tr>
                            
                            <th scope="col">Research Topic</th>
                            <th scope="col">Research area</th>
                            <th scope="col">Supervisor Name</th>
                            <th scope="col">Request message</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">Date</th>
                            <th scope="col">Approval</th>
                            <th scope="col">Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 requestSupervisor.map((request) => {

                                    return <tr key = {request._id}>
                                        
                                    <td>{request.researchTopic}</td>
                                    <td>{request.research_area}</td>
                                    <td>{request.supervisor_name}</td>
                                    <td>{request.Requestmessage}</td>
                                    <td>{request.GroupLeader}</td>
                                    <td>{request.sdate}</td>
                                    <td>{request.approval}</td>
                                    
                                    <td>
                                        
                                        
                                        
                                        <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "30px"}} className="btn btn-secondary" onClick={() => onDelete(request._id)}> Delete</button>

                                     
                                        

                                        {/* <a className="btn btn-warning" id="btn1" href={`/dashboard/busrouteupdate/${request._id}`}>
                                            <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                        </a> */}
                                

                                        
                                        
                                    </td> 
                                </tr>

                                 })
                                
                    
                                
                            }
                        </tbody>

                    </table>
                
            </div>
        </div>
        
    );
}

export default ViewSupervisorRequest;