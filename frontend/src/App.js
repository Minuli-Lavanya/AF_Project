import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import AddSupervisorRequest from "./components/RequestSupervisor/AddSupervisorRequest";



const App=()=>{
  return (
      <div>
      <BrowserRouter>
          <Routes>

                  
    
                  <Route path="/" element= {<Home/>}/>
                  <Route path="/RequestSupervisor" element= {<AddSupervisorRequest/>}/>
                  


       
          </Routes>
      </BrowserRouter>
      </div>
  );
}


  
export default App;