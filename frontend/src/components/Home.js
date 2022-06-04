import React from 'react';
import {Link} from 'react-router-dom';
//import axios from "axios";

const Home=()=>{
    return(
        <div>
            <h1>Hello</h1>

            <Link  to="/AddReseacrchTopic"> Add ResearchTopic</Link>
            <Link  to="/AddSupervisorDetails"> AddSupervisorDetails</Link>

            <div>
            <Link  to="/SignIn">User SignIn</Link>
            
            </div>
               <div>
               <Link  to="/adminsignin"> Admin SignIn</Link>
               </div>
        </div>
        
        
    );
}
export default Home;