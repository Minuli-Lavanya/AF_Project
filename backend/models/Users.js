const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userDetailSchema = new Schema({

    userId : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true
    },
    
    mobileNo : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },


})

//mongodb data table name
const UserDetail = mongoose.model("UserDetail", userDetailSchema);

//export the module
module.exports = UserDetail;



