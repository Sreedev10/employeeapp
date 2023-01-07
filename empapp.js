const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")


var empapp=Express()
empapp.get("/",(req,res)=>{
    res.send("welcome to my employee website")
})

empapp.get("/add",(req,res)=>{
    res.send("welcome to employee details")
})

empapp.get("/search",(req,res)=>{
    res.send("employee search page")
})

empapp.get("/delete",(req,res)=>{
    res.send("employee delete page")
})
empapp.get("/edit",(req,res)=>{
    res.send("employee edit page")
})
empapp.listen(3010)