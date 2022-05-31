// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const AllSupervisor=()=> {

// const [Supervisor, setSupervisor] = useState([]);

//   //This useEffect function used to get all Item's data


// useEffect(() => {
//     axios.get(`http://localhost:8070/supervisordetail/`)
//         .then((response) => {
//             setSupervisor(response.data);
//         })
// }, [])



// // ===============

// const setData = (id,supervisor_name, supervisor_email, supervisor_faculty,supervisor_research_area) => {
//     localStorage.getSupervisor('id', id)
//     localStorage.setSupervisor('supervisor_name', supervisor_name)
//     localStorage.setSupervisor('supervisor_email',supervisor_email)
//     localStorage.setSupervisor('supervisor_faculty', supervisor_faculty)
//     localStorage.setSupervisor('supervisor_research_area', supervisor_research_area)
// }


// const getData = () => {
//     axios.get(`http://localhost:8070/supervisordetail/`)
//         .then((getData) => {
//             setSupervisor(getData.data);
//         })
// }

// const onDelete = (id) => {
//     axios.delete(`http://localhost:8070/supervisordetail/delete/${id}`)
//     .then(() => {
//         getData();
//     })
// }

// //=======================
  
// return (
//     <div>
//       <h1 id="title">ALL Items</h1>

//       <div className="content" style={{marginTop:"2%"}}>
            

        
//         <div id="viewtable">
          
//             <table>
//                 <thead>
//                     <tr>
//                         <th style={{'textAlign':'center'}}>Product Name</th>
//                         <th style={{'textAlign':'center'}}>Category</th>
//                         <th style={{'textAlign':'center'}}>Description</th>
//                         <th style={{'textAlign':'center'}}>Price</th>
                        
                   


//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Supervisor.map((supervisor)=>{
//                         return <tr>
//                         <td>{supervisor.supervisor_name}</td>
//                         <td>{supervisor.supervisor_email}</td>
//                         <td>{supervisor.supervisor_faculty}</td>
//                         <td>{supervisor.supervisor_faculty}</td>

//                         <td>
//                             <a  href={`/EditSupervisorDetails`}>
//                                 <button onClick={() => setData(supervisor.id,supervisor.supervisor_name, supervisor.supervisor_email, supervisor.supervisor_faculty, supervisor.supervisor_research_area)}>
//                                     Update
//                                 </button>
                                            
//                         </a>
//                        </td>
                       
//                        <td>
//                             <button onClick={() => onDelete(supervisor._id)}>Delete</button>
//                        </td>
                        

//                         </tr>
//                     })}
                    
//                 </tbody>
//             </table>
//         </div>
//         </div>
      
//     </div>
//   );
// }

// export default AllSupervisor;


import React, {Component} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default class AllSupervisor extends Component {
 

    constructor(props){
        super(props);
        this.state = {supervisor: []};

        this.updateSupervisor = this.updateSupervisor.bind(this);

    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/supervisordetail/').then(response=>{
            this.setState({supervisor: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    deleteSupervisor=(id)=>{
        axios.delete(`http://localhost:8070/supervisordetail/delete/${id}`).then((res) =>{
            
                window.confirm("Do you need to delete ?");
                const navigate = useNavigate();
                navigate('/AllSupervisorDetails');
                
        })
        
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/supervisordetail/').then(response =>{
            this.setState({supervisor:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateSupervisor(id){

        const navigate = useNavigate();

        navigate(`/EditSupervisorDetails/${id}`);
       
    }


    
    render(){
        console.log("s", this.state.supervisor);
        return (
            
            <div>
                <div>
                <h2 style={{marginLeft:295}}>Research Topic Details</h2>
                </div>
                

                <br/>
                
                    <table >
                        
                        <thead>
                            <tr>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Fac</th>
                            <th>Area</th>
                            
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.supervisor.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                     <td>{p.supervisor_name}</td>
                                     <td>{p.supervisor_email}</td>
                                     <td>{p.supervisor_faculty}</td>
                                     <td>{p.supervisor_research_area}</td>
                                     
                                        
                                        <td>
                                            {/* <button  onClick={(e)=>{this.updateResearchTopic(p.id)}}>Update</button> */}
                                            
                                            {/*  */}
                                            <a className="btn btn-warning" id="btn1" href={`/EditSupervisorDetails/${p._id}`}>
                                                <i class="fas fa-edit "></i>&nbsp;&nbsp;Edit
                                            </a>
                                        {/*  */}
                                            

                                            <a  onClick={() => this.deleteSupervisor(p._id)}>
                                                Delete
                                            </a>
                                            
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>


                    </table>
                
            </div>


        );
    }


    
}

