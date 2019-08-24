const express= require("express");
const mongoose = require ("mongoose");
const passport = require ("passport");


//Passport Config
require("./config/passport")(passport);


//Load Routes
const auth = require("./routes/auth")
//Initialize app
const app = express();

//Home route
app.get ("/",(req,res) => {
  res.send("It Works!");
});
//Use Routes
app.use("/auth",auth);

const port = process.env.PORT ||5000;
app.listen (port,()=> {
  console.log(`server started on port ${port}`)
});