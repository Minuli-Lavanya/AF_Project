const router = require("express").Router();
const { response } = require("express");
let SupervisorDetail = require("../models/SupervisorDetail");

router.route("/add").post((req, res) => {



    const supervisor_name = req.body.supervisor_name;
    const supervisor_email = req.body.supervisor_email;
    const supervisor_faculty= req.body.supervisor_faculty;
    const supervisor_research_area = req.body.supervisor_research_area;
    

    const newSupervisorDetail = new SupervisorDetail({
        supervisor_name,
        supervisor_email,
        supervisor_faculty,
        supervisor_research_area,
        
    })

    newSupervisorDetail.save().then(() => {
        res.json("Supervisor Details added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    SupervisorDetail.find().then((supervisorDetail) => {
        res.json(supervisorDetail)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {

    let userId = req.params.id;

    const {
        supervisor_name,
        supervisor_email,
        supervisor_faculty,
        supervisor_research_area,
    } = req.body;

    const updateSupervisorDetail = {
        supervisor_name,
        supervisor_email,
        supervisor_faculty,
        supervisor_research_area,
    }

    const update = await SupervisorDetail.findByIdAndUpdate(userId, updateSupervisorDetail).then(() => {
        res.status(200).send({status: "Supervisor details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await SupervisorDetail.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const supervisorDetaildata = await SupervisorDetail.findById(userId).then((supervisorDetail) => {
        res.status(200).send({status: "fetched", supervisorDetail});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



// export the module
module.exports = router;