import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import AddReseachTopic from "./components/ResearchTopic/AddResearchTopic";
import ViewAllResearchTopic from "./components/ResearchTopic/AllResearchTopic";
import EditResearchTopic from "./components/ResearchTopic/EditResearchTopic";
import AddSupervisorDetails from "./components/SupervisorDetails/AddSupervisorDetails";
import AllSupervisor from "./components/SupervisorDetails/AllSupervisorDetails";
import EditSupervisor from "./components/SupervisorDetails/EditSupervisor";



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
                  <Route path="/EditSupervisorDetails/:id" element ={<EditSupervisor/>}/>

       
          </Routes>
      </BrowserRouter>
      </div>
  );
}


  
export default App;