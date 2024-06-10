const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const library=require("./models/library")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/contact",(req,res)=>{
    res.send("Welcome")
})

app.post("/add",(req,res)=>{
    res.send("test")
})

app.listen(8080,()=>{
    console.log("server started")
})