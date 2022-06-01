import React from 'react';
import {Link} from 'react-router-dom';
//import axios from "axios";

const Home=()=>{
    return(
        <div>
            <h1>Hello</h1>

            <Link  to="/AddReseacrchTopic"> Add ResearchTopic</Link>
            <Link  to="/AddSupervisorDetails"> AddSupervisorDetails</Link>
            
            

            
        </div>
        
    );
}
export default Home;