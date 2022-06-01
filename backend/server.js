const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useUnifiedTopologyL: true,
   // useFindAndModify: false
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log('____ connection Success ____')
})

const researchTopicRouter = require("./routes/researchTopic");
app.use("/researchtopic", researchTopicRouter)

const supervisorDetailRouter = require("./routes/supervisorDetail");
app.use("/supervisordetail", supervisorDetailRouter)

const GroupRegisterRoutes = require("./routes/GroupRegisterRoutes");
app.use("/groupdetail", GroupRegisterRoutes)

const requestSupervisorRoutes = require("./routes/requestSupervisorRoutes");
app.use("/requestSupervisor", requestSupervisorRoutes)

// ----------------------------------------------- //
const userRouter= require("./routes/users");
app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
})