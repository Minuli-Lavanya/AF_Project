import React, {Component} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default class ViewAllResearchTopic extends Component {
 

    constructor(props){
        super(props);
        this.state = {researchTopic: []};

        this.updateResearchTopic = this.updateResearchTopic.bind(this);

    }

    
    componentDidMount(){
        axios.get('http://localhost:8070/researchtopic/').then(response=>{
            this.setState({researchTopic: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    deleteResearchTopic=(id)=>{
        axios.delete(`http://localhost:8070/researchtopic/delete/${id}`).then((res) =>{
            
                window.confirm("Do you need to delete! ?");

                navigate('/ViewAllResearchTopic');
                
        })
        
    }

    componentDidUpdate(){
        axios.get('http://localhost:8070/researchtopic/').then(response =>{
            this.setState({researchTopic:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateResearchTopic(id){
        this.props.history.push(`/editHotels/${id}`);
       
    }


    
    render(){
        console.log("s", this.state.researchTopic);
        return (
            
            <div>
                <div>
                <h2 style={{marginLeft:295}}>Research Topic Details</h2>
                </div>
                

                <br/>
                
                    <table >
                        
                        <thead>
                            <tr>
                            
                            <th>Research Topic</th>
                            <th>Research Category</th>
                            <th>Research Area</th>
                            <th>Supervisor Name</th>
                            <th>Co-Supervisor Name</th>
                            <th>Group Id</th>
                            <th>Member 1</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Member 2</th>
                            <th>Member 3</th>
                            <th>Member 4</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.researchTopic.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                     <td>{p.researchTitle}</td>
                                     <td>{p.research_category}</td>
                                     <td>{p.research_area}</td>
                                     <td>{p.supervisor_name}</td>
                                     <td>{p.co_supervisor_name}</td>
                                     <td>{p.groupId}</td>
                                     <td>{p.member1}</td>
                                     <td>{p.leader_email}</td>
                                     <td>{p.leader_phoneNumber}</td>
                                     <td>{p.member2}</td>
                                     <td>{p.member3}</td>
                                     <td>{p.member4}</td>
                                        
                                        <td>
                                            <button  onClick={(e)=>{this.updateResearchTopic(p.id)}}>Update</button>
                                            
                                            

                                            <a  onClick={() => this.deleteResearchTopic(p._id)}>
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

