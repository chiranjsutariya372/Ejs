const mongoose = require('mongoose');
require('dotenv').config();

let url = process.env.url

const connect=async()=>{
    try {
        await mongoose.connect(url)
        console.log("Connected to server");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports=connect;