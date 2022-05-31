// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from "react-router";



// export default function EditSupervisor() {

    

// 	const [id, setid] = useState(null);

//     const [supervisor_name, setsupervisor_name] = useState('');
//     const [supervisor_email, setsupervisor_email] = useState('');
// 	const [supervisor_faculty, setsupervisor_faculty] = useState('');
//     const [supervisor_research_area, setsupervisor_research_area] = useState('');
    
// 	const navigate = useNavigate();
    
//     const sendDataToAPI = () => {
//         axios.put(`http://localhost:8070/researchtopic/update/${id}`, {
//             id, supervisor_name, supervisor_email, supervisor_faculty,supervisor_research_area,
//         }).then(() => {
            
// 			navigate('/allUser');
//         })
//     }

//     // useEffect(() => {
// 	// 	setid(localStorage.getSupervisor('id'))
//     //     setsupervisor_name(localStorage.getSupervisor('supervisor_name'))
//     //     setsupervisor_email(localStorage.getSupervisor('supervisor_email'));
//     //     setsupervisor_faculty(localStorage.getSupervisor('supervisor_faculty'));
// 	// 	setsupervisor_research_area(localStorage.getSupervisor('supervisor_research_area'));
        
//     // }, [])

//     return (
//         <div>
// 			<h1>Update Supervisor Details</h1>
// 			<div className ="container">
//             <form>
                
//                     <div className="form-group">
// 					<label> Name</label>
//                     <input name="setsupervisor_name"
//                         value={setsupervisor_name}
//                         onChange={(e) => setsupervisor_name(e.target.value)}
//                         placeholder='Name' />
// 					</div>
               
                
//                     <div className="form-group">
// 					<label>Email</label>
//                     <input
//                         name="supervisor_email"
//                         value={supervisor_email}
//                         placeholder='email'
//                         onChange={(e) => setsupervisor_email(e.target.value)}
//                     />
// 					</div>
               
				
//                     <div className="form-group">
// 					<label>Faculty</label>
//                     <input
//                         name="supervisor_faculty"
//                         value={supervisor_faculty}
//                         placeholder='phone number'
//                         onChange={(e) => setsupervisor_faculty(e.target.value)}
//                     />
// 					</div>

//                     <div className="form-group">
// 					<label>Research Area</label>
//                     <input
//                         name="supervisor_research_area"
//                         value={supervisor_research_area}
//                         placeholder='phone number'
//                         onChange={(e) => setsupervisor_research_area(e.target.value)}
//                     />
// 					</div>
               
//                 <button type='submit' onClick={sendDataToAPI}>Update</button>
//             </form>
// 			</div>
//         </div>
//     )
// }



import React,{Component} from 'react'
//import {Button,Col, Row} from "reactstrap";
import axios from 'axios';

import { useParams } from 'react-router-dom'

export default class EditSupervisor extends Component {
    constructor(props) {
        super(props); 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = { 

            supervisor_name:'', 
            supervisor_email:'',
            supervisor_faculty:'', 
            supervisor_research_area:'',

            supervisors :[]
    
         };
        
         
    }

    

    componentDidMount(){
        //console.log("userId :",this.props.match.params.id);

        
        axios.get(`http://localhost:8070/supervisordetail/${id}`)
        .then(response => {
       
        //console.log(this.state.agendas.event);
       
                 
                this.setState ({    
                    supervisor_name :response.data.supervisors.supervisor_name,
                    supervisor_email : response.data.supervisors.supervisor_email,
                    supervisor_faculty : response.data.supervisors.supervisor_faculty,
                    supervisor_research_area : response.data.supervisors.supervisor_research_area,
                    
                })       
               
        })
        .catch(error => {
          alert(error.message)
        })
    }

    onSubmit(e){
        e.preventDefault();
        let supervisors = {
            supervisor_name : this.state.supervisor_name,
            supervisor_email : this.state.supervisor_email,
            supervisor_faculty : this.state.supervisor_faculty,
            supervisor_research_area : this.state.supervisor_research_area,
            

        };

        console.log('Data to Send', supervisors);
        axios.put(`http://localhost:8070/researchtopic/update/${this.props.match.params.id}`, supervisors)
        .then(response => {
            alert('Data Successfully Updated.')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)

        })

    }

    onChange(e) {
        this.setState( { [e.target.name] : e.target.value })
    }
      
     

    render(){
        return(
            <div>

                
                         
                        <form >
                           
                            <input className='inputfield'
                                placeholder='Event Name'
                                type = 'text'
                                id = "supervisor_name"
                                name = "event"
                                // value = { this.state.supervisor_name }
                                // onChange = { this.onChange } 
   
                            >
                            </input>

                            <input className='inputfield'
                                placeholder='Person'
                                type = 'text'
                                id = "supervisor_email"
                                name = "person"
                                // value = { this.state.supervisor_email }
                                // onChange = { this.onChange } 
   
                            >
                            </input>

                            <input className='inputfield'
                                placeholder= 'Date'
                                type = 'text'
                                id = "supervisor_faculty"
                                name = "date"
                                // value = { this.state.supervisor_faculty }
                                // onChange = { this.onChange } 
   
                            >
                            </input>

                            <input className='inputfield'
                                placeholder='Starting Time'
                                type = 'text'
                                id = "supervisor_research_area"
                                name = "startingTime"
                                // value = { this.state.supervisor_research_area }
                                // onChange = { this.onChange } 
   
                            >
                            </input>

                            
            
                            <button className ='submitbtn' style={{backgroundColor:'#341E71',borderRadius: '93px'}}>
                                <span className='btnTxt'>Submit</span>
                            </button>

                        </form>
                    
                
            </div>
        )
    }

}