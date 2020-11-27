const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");


const usersRoute = require("./routes/users");

const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));

app.use("/",usersRoute);



app.listen(3000,()=>console.log("server started at port 3000"))