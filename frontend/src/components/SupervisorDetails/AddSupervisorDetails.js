import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function AddSupervisorDetails() {


    const [supervisor_name, setsupervisor_name] = useState("");
    const [supervisor_email, setsupervisor_email] = useState("");
    const [supervisor_faculty, setsupervisor_faculty] = useState("");
    const [supervisor_research_area, setsupervisor_research_area] = useState("");
    

    const navigate = useNavigate();



    function sendData(e){
        e.preventDefault();
        
        const newSupervisor ={

            supervisor_name,
            supervisor_email,
            supervisor_faculty,
            supervisor_research_area,

        }

        

        axios.post("http://localhost:8070/supervisordetail/add", newSupervisor).then(()=>{
            alert("New Supervisor Details added.");
            navigate('/AllSupervisorDetails');
            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div>

                
            <div id=''>
            <span id='heading' style={{'textAlign':'center'}}>Supervisor Details</span>

                <form onSubmit={sendData} id="">

                    <br></br>
                    <span id='heading' style={{'textAlign':'center'}}>Add Supervisor Details</span>
                    <br></br><br></br>

                    <div id=''>

                        <div>
                            <label htmlFor="" class="ftext">Name</label>
                            <br></br>
                            <input type="text" class="form-field" id="supervisor_name" placeholder="" required
                            onChange = {(e) => {
                                setsupervisor_name(e.target.value);
                            }}   
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Email</label><br></br>
                            <input type="text"  id="supervisor_email" class="form-field"  placeholder="" required
                                onChange = {(e) => {
                                setsupervisor_email(e.target.value);
                            }}  
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Department</label><br></br>
                            <input type="text"  id="supervisor_faculty"  class="form-field"  placeholder="" required
                            onChange = {(e) => {
                                setsupervisor_faculty(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Reseach Area</label><br></br>
                            <input type="text"  id="supervisor_research_area"  class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setsupervisor_research_area(e.target.value);
                            }}
                            />
                        </div>

                        
                    </div><br></br>


                    <button type="submit" id = "submit-button">Add</button>
                </form>



            </div>
            
            
        </div>
    )
}