const router = require("express").Router();
const { response } = require("express");
let UserDetail = require("../models/Users");

router.route("/add").post((req, res) => {


    const userId = req.body.userId;
    const name = req.body.name;
    const password = req.body.password;
    const role= req.body.role;
    const mobileNo = req.body.mobileNo;
    const email = req.body.email;
    

    const newUserDetail = new UserDetail({

        userId,
        name,
        password,
        role,
        mobileNo,
        email,
        
    })

    newUserDetail.save().then(() => {
        res.json("User Details added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {

    UserDetail.find().then((userDetail) => {
        res.json(userDetail)
    
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:userId").put(async (req,res) => {

    let user_Id = req.params.userId;

    const {
        userId,
        name,
        password,
        role,
        mobileNo,
        email,
    } = req.body;

    const updateUserDetail = {
        userId,
        name,
        password,
        role,
        mobileNo,
        email,
    }

    const update = await UserDetail.findByIdAndUpdate(user_Id, updateUserDetail).then(() => {
        res.status(200).send({status: "USer details Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message });
    }) 

})

router.route("/delete/:userId").delete(async (req, res) => {
    let user_Id = req.params.userId;

    await UserDetail.findByIdAndDelete(user_Id).then(() => {
        res.status(200).send({status: " Deleted "});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete !", error:err.message})
    })
})

//get one's data
router.route("/get/:userId").get(async (req, res) => {
   // let userId = req.params.id;

    const UserDetaildata = await UserDetail.findOne({userId: req.params.userId}).then((userDetail) => {
        res.status(200).send({status: "fetched", userDetail});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get details!", error:err.message});
    })

})



// export the module
module.exports = router;