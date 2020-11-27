const { concat } = require("async");

const app = require("express").Router();
const User = require("../models/user");

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

module.exports = app