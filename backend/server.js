const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
connectDB()



app.get('/',(req,res)=>{
    res.json({message:"it is running successfully"})
})



const port = process.env.PORT || 5000 
app.listen(port, ()=>{
    console.log(`server is successfully running`)
})