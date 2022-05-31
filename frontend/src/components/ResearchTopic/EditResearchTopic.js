import React, { Component } from 'react';
import axios from 'axios';

export default class EditResearchTopic extends Component {





    render() {
        return(

            <div>

                <div id='sec1'>

                    <form  id="form-hotels">

                        <br></br>
                        <span id='heading' style={{'marginLeft':'180px'}}>Update Research Topic</span>
                        <br></br><br></br>

                        <div id='sec2'>

                            <div>
                                <label  class="ftext">Research Title </label>
                                <input type="text" className="form-control" id="researchTitle" placeholder="" required
                                       
                                />
                            </div>

                            <div>
                                <label  class="ftext">Research Category </label>
                                <input type="text" className="form-control" id="research_category" placeholder="" required
                                 
                                />
                            </div>

                            <div>
                                <label  class="ftext">Research Area</label>
                                <input type="text" className="form-control" id="research_area"  placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label  class="ftext">Address</label>
                                <input type="text" className="form-control" id="supervisor_name" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label  class="ftext">Description </label>
                                <input type="text" className="form-control" id="co_supervisor_name" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="groupId" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="member1" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="leader_email" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="leader_phoneNumber" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="member2" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="member3" placeholder="" required
                                
                                />
                            </div>

                            <div>
                                <label class="ftext">Region</label>
                                <input type="text" className="form-control" id="member4" placeholder="" required
                                
                                />
                            </div>

                        </div> 
                        
                        <button type="submit" id='edit-button'>Edit</button>
                        <br></br>
                    </form>

                </div>
            
            </div>
            
        )
    }
}