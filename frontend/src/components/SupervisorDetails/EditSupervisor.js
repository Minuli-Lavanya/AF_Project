import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router";



export default function EditSupervisor() {

    
    const params = useParams();
	const [_id, setId] = useState("");

    const [supervisor_name, setsupervisor_name] = useState("");
    const [supervisor_email, setsupervisor_email] = useState("");
	const [supervisor_faculty, setsupervisor_faculty] = useState("");
    const [supervisor_research_area, setsupervisor_research_area] = useState("");

    const[SupervisorDetail, setSupervisorDetail] = useState({});
    
	//const navigate = useNavigate();

    let data = {
        _id: _id,
        supervisor_name: supervisor_name,
        supervisor_email: supervisor_email,
        supervisor_faculty: supervisor_faculty,
        supervisor_research_area: supervisor_research_area
      };
    
      let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await axios.put(
            `http://localhost:8070/supervisordetail/update/${params._id}`,
            data
          );
          if (res) {
            console.log(data);
            alert("updated successfully");
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        axios.get(`http://localhost:8070/supervisordetail/`+ params._id).then((response) => {
         
            setSupervisorDetail(response.data.supervisordetail);
          }).catch((e)=>{
    
          })
       
      }, []);


    return (
        <div>
			<h1>Update Supervisor Details</h1>
			<div className ="container">
            <form onSubmit={handleSubmit}>
                

                            <input 
                                placeholder='Id'
                                type = 'text'
                                id = "_id"
                                value={SupervisorDetail._id}
                                onChange={(e) => setId(e.target.value)}
                                 
   
                            >
                            </input>

                            <input 
                                placeholder='Name'
                                type = 'text'
                                id = "supervisor_name"
                                value={SupervisorDetail.supervisor_name}
                                onChange={(e) => setsupervisor_name(e.target.value)}
                                 
   
                            >
                            </input>

                            <input 
                                placeholder='Email'
                                type = 'email'
                                id = "supervisor_email"
                                value={SupervisorDetail.supervisor_email}
                                onChange={(e) => setsupervisor_email(e.target.value)}
                                
                            >
                            </input>

                            <input 
                                placeholder= 'Faculty'
                                type = 'text'
                                id = "supervisor_faculty"
                                value={SupervisorDetail.supervisor_faculty}
                                onChange={(e) => setsupervisor_faculty(e.target.value)}
                            >
                            </input>

                            <input 
                                placeholder='Research area'
                                type = 'text'
                                id = "supervisor_research_area"
                                value={SupervisorDetail.supervisor_research_area}
                                onChange={(e) => setsupervisor_research_area(e.target.value)}
                            >
                            </input>

               
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
            </form>
			</div>
        </div>
    )
}



// import React,{Component} from 'react'
// import axios from 'axios';
// import { useParams } from 'react-router-dom'

// export default class EditSupervisor extends Component {
//     constructor(props) {
//         super(props); 
        
//         this.state = { 

//             supervisor_name:'', 
//             supervisor_email:'',
//             supervisor_faculty:'', 
//             supervisor_research_area:'',
    
//          }

//          this.onChangesupervisor_name = this.onChangesupervisor_name.bind(this);
//          this.onChangesupervisor_email = this.onChangesupervisor_email.bind(this);
//          this.onChangesupervisor_faculty = this.onChangesupervisor_faculty.bind(this);
//          this.onChangesupervisor_research_area = this.onChangesupervisor_research_area.bind(this);

//          this.onSubmit = this.onSubmit.bind(this);


//     }

    

//     componentDidMount(){
    
//         axios.get('http://localhost:8070/SupervisorDetail/' + this.props.match.params.id)
//         .then(response => {
       
//             this.setState ({    
//                     supervisor_name :response.data.supervisor_name,
//                     supervisor_email : response.data.supervisor_email,
//                     supervisor_faculty : response.data.supervisor_faculty,
//                     supervisor_research_area : response.data.supervisor_research_area,
                    
//                 })       
               
//         })
//         .catch(function(error){
//             console.log(error)
//         });
//     }

//     onChangesupervisor_name(e){
//         this.setState({supervisor_name:e.target.value});
//     }

//     onChangesupervisor_email(e){
//         this.setState({supervisor_email:e.target.value});
//     }

//     onChangesupervisor_faculty(e){
//         this.setState({supervisor_faculty:e.target.value});
//     }

//     onChangesupervisor_research_area(e){
//         this.setState({supervisor_research_area:e.target.value});
//     }

//     onSubmit(e){
//         e.preventDefault();
//         const obj = {
//             supervisor_name: this.state.supervisor_name,
//             supervisor_email: this.state.supervisor_email,
//             supervisor_faculty: this.state.supervisor_faculty,
//             supervisor_research_area: this.state.supervisor_research_area,
            

//         };

        
//         axios.put("http://localhost:8070/researchtopic/update/" +this.props.match.params.id, obj)
//         .then(res =>console.log(res.data),
//         alert("Update Successfully"));

//         //this.props.history.push('/viewHotels');

//     }

   
      
     

//     render(){
//         return(
//             <div>

//                         <form >
                           
//                             <input 
//                                 placeholder='Name'
//                                 type = 'text'
//                                 id = "supervisor_name"
//                                 value={this.state.supervisor_name}
//                                 onChange = {this.onChangesupervisor_name}
                                 
   
//                             >
//                             </input>

//                             <input 
//                                 placeholder='Email'
//                                 type = 'email'
//                                 id = "supervisor_email"
//                                 value={this.state.supervisor_email}
//                                 onChange = {this.onChangesupervisor_email}
                                
//                             >
//                             </input>

//                             <input 
//                                 placeholder= 'Faculty'
//                                 type = 'text'
//                                 id = "supervisor_faculty"
//                                 value={this.state.supervisor_faculty}
//                                 onChange = {this.onChangesupervisor_faculty}
//                             >
//                             </input>

//                             <input 
//                                 placeholder='Research area'
//                                 type = 'text'
//                                 id = "supervisor_research_area"
//                                 value={this.state.supervisor_research_area}
//                                 onChange = {this.onChangesupervisor_research_area}
//                             >
//                             </input>

                            
            
//                             <button type="submit" id='edit-button'>Edit</button>

//                         </form>
                    
                
//             </div>
//         )
//     }

// }