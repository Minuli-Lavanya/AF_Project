import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import AddReseachTopic from "./components/ResearchTopic/AddResearchTopic";
import ViewAllResearchTopic from "./components/ResearchTopic/AllResearchTopic";
import EditResearchTopic from "./components/ResearchTopic/EditResearchTopic";
import AddSupervisorDetails from "./components/SupervisorDetails/AddSupervisorDetails";
import AllSupervisor from "./components/SupervisorDetails/AllSupervisorDetails";
import EditSupervisor from "./components/SupervisorDetails/EditSupervisor";

import AddSupervisorRequest from "./components/RequestSupervisor/AddSupervisorRequest";
import ViewSupervisorRequest from "./components/RequestSupervisor/ViewSupervisorRequest";
import UpdateSupervisorApproval from "./components/Admin/SupervisorApproval/UpdateSupervisorApproval";
import SupervisorView from "./components/Admin/SupervisorApproval/SupervisorView";

import SignUp from "./components/Pages/SignUp";
import SignIn from "./components/Pages/SignIn";
import User from "./components/Pages/User";
import Profile from "./components/Pages/Profile";

import AdminSignIn from "./components/Admin/Admin/AdminSignIn";
import AdminSignUp from "./components/Admin/Admin/AdminSignUp";
// import Admin from "./components/Admin/Admin/Admin";

const App=()=>{
  return (
      <div>
      <BrowserRouter>
          <Routes>

                  
    
                  <Route path="/" element= {<Home/>}/>


                  <Route path="/AddReseacrchTopic" element= {<AddReseachTopic/>}/>
                  <Route path="/ViewAllResearchTopic" element ={<ViewAllResearchTopic/>}/>
                  <Route path="/EditResearchTopic/:id" element ={<EditResearchTopic/>}/>
                  
                  <Route path="/AddSupervisorDetails" element ={<AddSupervisorDetails/>}/>
                  <Route path="/AllSupervisorDetails" element ={<AllSupervisor/>}/>
                  <Route path="/EditSupervisorDetails/:_id" element ={<EditSupervisor/>}/>

{/*  */}
                  <Route path="/RequestSupervisor" element= {<AddSupervisorRequest/>}/>
                  <Route path="/ViewSupervisorRequest" element= {<ViewSupervisorRequest/>}/>
                  <Route path="/updateSupervisorApproval/:_id" element= {<UpdateSupervisorApproval/>}/>
                  <Route path="/supervisorView" element= {<SupervisorView/>}/>
                  <Route path="/SignUp" element= {<SignUp/>}/>
                  <Route path="/SignIn" element= {<SignIn/>}/>
                  <Route path="/User" element= {<User/>}/>
                  <Route path="/Profile" element= {<Profile/>}/>
                  <Route path="/adminsignin" element= {<AdminSignIn/>}/>
                  <Route path="/adminsignup" element= {<AdminSignUp/>}/>
                   {/*<Route path="/Admin" element= {<Admin/>}/>*/}
          </Routes>
      </BrowserRouter>
      </div>
  );
}


  
export default App;