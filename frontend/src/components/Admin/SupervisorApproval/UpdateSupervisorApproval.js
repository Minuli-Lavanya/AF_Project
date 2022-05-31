import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateSupervisorApproval() {
  const params = useParams();
  const [_id, setId] = useState("");
  const [researchTopic, setresearchTopic] = useState("");
  const [research_area, setresearch_area] = useState("");
  const [Requestmessage, setRequestmessage] = useState("");
  const [GroupLeader, setGroupLeader] = useState("");
  const [supervisorDetail, setsupervisorDetail] = useState({});

  let data = {
    _id: _id,
    researchTopic: researchTopic,
    research_area: research_area,
    Requestmessage: Requestmessage,
    GroupLeader: GroupLeader
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(
        `http://localhost:8070/requestSupervisor/update/${params._id}`,
        data
      );
      if (res) {
        console.log(data);
        alert("Reservation Info updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8070/requestSupervisor/get/`+params._id).then((response) => {
     
        setsupervisorDetail(response.data.requestSupervisor);
      }).catch((e)=>{

      })
   
  }, []);

  

  return (
    <div className="container">
      <h1 className="text-center">Update Reservation</h1>

      <form className="form" onSubmit={handleSubmit}>

        <div className="form-group">
        <label >Reservation Info _id</label>
        <input
        type="text"
        className="form-control"
        _id="userId"
        value={supervisorDetail._id}
        onChange={(e) => setId(e.target.value)}
        disabled
        required />
        </div>

        <div className="form-group">
        <label >Room Type</label>
        <input
        value={supervisorDetail.researchTopic}
        type="text"
        className="form-control"
        _id="researchTopic"
        onChange={(e) => setresearchTopic(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >research_area</label>
        <textarea
        className="form-control"
        _id="research_area"
        rows="3"
        value={supervisorDetail.research_area}
        onChange={(e) => setresearch_area(e.target.value)}
        required></textarea>
        </div>

        <div className="form-group">
        <label >Available Rooms</label>
        <input
        className="form-control"
        _id="Requestmessage"
        rows="3"
        value={supervisorDetail.Requestmessage}
        onChange={(e) => setRequestmessage(e.target.value)}
        required />
        </div>

        <div className="form-group">
        <label >GroupLeader</label>
        <input
        className="form-control"
        _id="GroupLeader"
        rows="3"
        placeholder={supervisorDetail.GroupLeader}
        onChange={(e) => setGroupLeader(e.target.value)}
        required />
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">
          Update Reservation
        </button>
        &nbsp;
      </form>
      <br></br>
      <br></br>
    
      <br></br>
      <br></br>
      <a href="/viewReservationInfo">
        <button className="btn btn-primary">Go Back</button>
      </a>
    </div>
  );
}

export default UpdateSupervisorApproval;