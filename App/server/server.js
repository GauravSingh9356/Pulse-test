//jshint esversion:8
const express = require('express');

const userRouter = require("./routes/userRoute");

const app = express();


const cors = require('cors');

const mongoose = require("mongoose");

app.use(express.json()); //middleware

const bodyParser = require("body-parser")

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors({origin:"*"}));

const Motors = require("../server/Models/model");

const NonMotors = require("../server/Models/model");


const path = require('path');

const fileRoutes = require('./routes/file-upload-routes');

mongoose
  .connect(
    "mongodb+srv://Narendra5398:Narendra5398@cluster0.ic2zv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected...");
  })
    .catch((err) => console.log(err));

app.get('/gg',(req,res)=>{
    res.send("Hello Naren");
})


app.use("/api/users", userRouter);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.routes);

app.listen(9000, () => {
  console.log("Server running");
});

