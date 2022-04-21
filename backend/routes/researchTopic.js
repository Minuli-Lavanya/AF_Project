const router = require("express").Router();
const {response} = require("express");
let ResearchTopic = require("../models/ResearchTopic");

router.route("/add").post((req, res) => {

    const groupId = req.body.groupId;
    const member1 = req.body.member1;
    const member2 = req.body.member2;
    const member3 = req.body.member3;
    const member4 = req.body.member4;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const researchTitle = req.body.researchTitle;
    const desription = req.body.desription;
    const status = req.body.status;

    const newResearchTopic = new ResearchTopic({
        groupId,
        member1,
        member2,
        member3,
        member4,
        email,
        phoneNumber,
        researchTitle,
        desription,
        status
    })

    newResearchTopic.save().then(() => {
        res.json("New Research Topic added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    ResearchTopic.find().then((researchTopic) => {
        res.json(researchTopic)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {groupId,member1,member2,member3,member4,email,phoneNumber,researchTitle,desription,status} = req.body;

    const updateResearchTopic = {
        groupId,
        member1,
        member2,
        member3,
        member4,
        email,
        phoneNumber,
        researchTitle,
        desription,
        status
    }

    const update = await ResearchTopic.findByIdAndUpdate(userId, updateResearchTopic).then(() => {
        res.status(200).send({status: "research topic data Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})


// export the module
module.exports = router;