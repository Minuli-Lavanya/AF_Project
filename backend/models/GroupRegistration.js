const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupRegisterSchema = new Schema({

    member1Name : {
        type : String,
        required : true
    },

    member2Name : {
        type : String,
        required : true
    },

    member3Name : {
        type : String,
        required : true
    },

    member4Name : {
        type : String,
        required : true
    },

    member1email : {
        type : String,
        required : true
    },

    member2email : {
        type : String,
        required : true
    },

    member3email : {
        type : String,
        required : true
    },

    member4email : {
        type : String,
        required : true
    },

    member1phoneNumber : {
        type : String,
        required : true
    },

    member2phoneNumber : {
        type : String,
        required : true
    },

    member3phoneNumber : {
        type : String,
        required : true
    },

    member4phoneNumber : {
        type : String,
        required : true
    },

    member1ITnumber : {
        type : String,
        required : true
    },

    member2ITnumber : {
        type : String,
        required : true
    },

    member3ITnumber : {
        type : String,
        required : true
    },

    member4ITnumber : {
        type : String,
        required : true
    },
    
})

const groupRegister = mongoose.model("groupRegister", groupRegisterSchema);

module.exports = groupRegister;