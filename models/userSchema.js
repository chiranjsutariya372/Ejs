const mongoose= require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    password:String
})

let user=mongoose.model('MVC',userSchema);

module.exports=user;