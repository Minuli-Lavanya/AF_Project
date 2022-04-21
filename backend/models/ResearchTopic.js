const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const researchTopicSchema = new Schema({

    groupId : {
        type : String,
        required : true
    },

    member1 : {
        type : String,
        required : true
    },

    member2 : {
        type : String,
        required : true
    },

    member3 : {
        type : String,
        required : true
    },

    member4 : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phoneNumber : {
        type : String,
        required : true
    },

    researchTitle : {
        type : String,
        required : true
    },

    desription : {
        type : String,
        required : true
    },

    status : {
        type : String,
        required : false
    }

})

//mongodb data table name
const ResearchTopic = mongoose.model("ResearchTopic", researchTopicSchema);

//export the module
module.exports = ResearchTopic;