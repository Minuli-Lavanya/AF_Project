import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";

import AddSupervisorRequest from "./components/RequestSupervisor/AddSupervisorRequest";
import ViewSupervisorRequest from "./components/RequestSupervisor/ViewSupervisorRequest";
import UpdateSupervisorApproval from "./components/Admin/SupervisorApproval/UpdateSupervisorApproval";
import SupervisorView from "./components/Admin/SupervisorApproval/SupervisorView";


const App=()=>{
  return (
      <div>
      <BrowserRouter>
          <Routes>

                  
    
                  <Route path="/" element= {<Home/>}/>
                  <Route path="/RequestSupervisor" element= {<AddSupervisorRequest/>}/>
                  <Route path="/ViewSupervisorRequest" element= {<ViewSupervisorRequest/>}/>
                  <Route path="/updateSupervisorApproval/:_id" element= {<UpdateSupervisorApproval/>}/>
                  <Route path="/supervisorView" element= {<SupervisorView/>}/>
       
          </Routes>
      </BrowserRouter>
      </div>
  );
}


  
export default App;