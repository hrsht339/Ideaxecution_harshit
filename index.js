const express = require("express")
const {connection} = require("./db")
const {userModel} = require("./user.model")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

app.post("/signin",async(req,res)=>{
    let {username,password} = req.body
    let user = await userModel.findOne({username})
    console.log(user)
    if(user){
        if(password==user.password){
            res.send("true")
        }
        else{
            res.send("password incorrect")
        }
    }
    else{
        res.send("user not found")
    }
})

app.patch("/update",async(req,res)=>{
    let {username} = req.body
    let user = await userModel.findOne({username})
    user.gamesplayed++
    await userModel.findOneAndUpdate({username},user)
    res.send()
})

app.post("/user",async(req,res)=>{
    let {username} = req.body
    let user = await userModel.findOne({username})
    res.send(user)
})

app.listen(4500,async()=>{
    try{
        await connection
        console.log("db connected")
    }
    catch(err){
        console.log(err)
    }
    console.log("server connected")
})