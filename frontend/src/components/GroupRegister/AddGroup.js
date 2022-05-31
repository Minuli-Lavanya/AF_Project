// import React, {useState} from 'react';
// import axios from "axios";

// const AddGroup=()=>{

//     const [productName, setname] = useState("");
//     const [unitPrice, setprice] = useState("");
//     const [description, setdescription] = useState("");
//     const [category, setcategory] = useState("");



//      function sendData(e){
//        e.preventDefault();
        
//          const newItem = {

//             productName,unitPrice,description,category,
    
//         };

//         axios.post("http://localhost:3000/trader/item", newItem).then(()=>{
//             alert("Item Details Added")

        
//         }).catch((err)=>{
//             alert(err)
//         });

//     }

//     return(
//         <div>
//             <header>
//                 <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
//                     <div>
//                         <a href="/" className='navbar-brand'>Shopping App</a>
//                     </div>
//                 </nav>
//             </header>

//                 <div>
//                 <h1>Add Item</h1>
                
//                 <div className ="container" id = "addSupplier-form1">

            

//                     <form onSubmit={sendData}>

        
    
//                         <div className="form-group">
//                             <label htmlFor="name">Product Name</label>
//                             <input type="text" className="form-control" id="productName" required
//                                 onChange = {(e) => {
//                                     setname(e.target.value);
//                                 }}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="name">UnitPrice</label>
//                             <input type="text" className="form-control" id="unitPrice" required
//                                 onChange = {(e) => {
//                                     setprice(e.target.value);
//                                 }}
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="name">Category</label>
//                             <input type="text" className="form-control" id="category" required
//                                 onChange = {(e) => {
//                                     setcategory(e.target.value);
//                                 }}
//                             />
//                         </div> 
    

//                         <div className="form-group">
//                             <label htmlFor="name">Description</label>
//                             <input type="text" className="form-control" id="description" required
//                                 onChange = {(e) => {
//                                     setdescription(e.target.value);
//                                 }}
//                             />
//                         </div> 


//                         <br></br>
//                         <button type="submit" className="btn btn-outline-success" id = "">SAVE</button>
//                     </form>

//                 </div>
                
                
//             </div>
//         </div>
        
//     );
// }

// export default AddGroup;