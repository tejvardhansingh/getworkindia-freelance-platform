const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.mongourl)
        console.log("Database connected successfully!!!")
    }catch(err){
        console.log('message',err)
        process.exit(1)
    }
}

module.exports = connectDB;