import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function AddReseachTopic() {


    const [researchTitle, setresearchTitle] = useState("");
    const [research_category, setresearch_category] = useState("");
    const [research_area, setresearch_area] = useState("");
    const [supervisor_name, setsupervisor_name] = useState("");
    const [co_supervisor_name, setco_supervisor_name] = useState("");
    const [groupId, setgroupId] = useState("");
    const [member1, setmember1] = useState("");
    const [leader_email, setleader_email] = useState("");
    const [leader_phoneNumber, setleader_phoneNumber] = useState("");
    const [member2, setmember2] = useState("");
    const [member3, setmember3] = useState("");
    const [member4, setmember4] = useState("");

    const navigate = useNavigate();



    function sendData(e){
        e.preventDefault();
        
        const newResearchTopic ={

            researchTitle,
            research_category, 
            research_area, 
            supervisor_name,
            co_supervisor_name,  
            groupId, 
            member1,
            leader_email, 
            leader_phoneNumber, 
            member2,
            member3,
            member4,

        }

        

        axios.post("http://localhost:8070/researchtopic/add", newResearchTopic).then(()=>{
            alert("New Reseach Details Added");
            navigate('/ViewAllResearchTopic');
            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div>

                
            <div id=''>
            <span id='heading' style={{'textAlign':'center'}}>Research Topic</span>

                <form onSubmit={sendData} id="">

                    <br></br>
                    <span id='heading' style={{'textAlign':'center'}}>Research Topic</span>
                    <br></br><br></br>

                    <div id=''>

                        <div>
                            <label htmlFor="researchTitle" class="ftext">Research Title</label>
                            <br></br>
                            <input type="text" class="form-field" id="researchTitle" placeholder="" required
                            onChange = {(e) => {
                                setresearchTitle(e.target.value);
                            }}   
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Reseacrh Category</label><br></br>
                            <input type="text"  id="research_category" class="form-field"  placeholder="" required
                                onChange = {(e) => {
                                setresearch_category(e.target.value);
                            }}  
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Research Area</label><br></br>
                            <input type="text"  id="research_area"  class="form-field"  placeholder="" required
                            onChange = {(e) => {
                                setresearch_area(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Supervisor Name</label><br></br>
                            <input type="text"  id="supervisor_name"  class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setsupervisor_name(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Co-Supervisor Name</label><br></br>
                            <input type="text"  id="co_supervisor_name"  class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setco_supervisor_name(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Group Id</label><br></br>
                            <input type="text"  id="groupId" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setgroupId(e.target.value);
                            }}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="to" class="ftext">Group Leader Name</label><br></br>
                            <input type="text"  id="member1" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setmember1(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Email</label><br></br>
                            <input type="email"  id="leader_email" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setleader_email(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Phone Number</label><br></br>
                            <input type="number"  id="leader_phoneNumber" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setleader_phoneNumber(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Name (Member 2) </label><br></br>
                            <input type="text"  id="member2" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setmember2(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Name (Member 3)</label><br></br>
                            <input type="text"  id="member3" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setmember3(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Name (Member 4)</label><br></br>
                            <input type="text"  id="address" class="form-field" placeholder="" 
                            onChange = {(e) => {
                                setmember4(e.target.value);
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