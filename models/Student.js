const mongoose = require("mongoose") ; 

const Student = new mongoose.Schema({ 
    roll_no :{
        type : String ,
        unique : true ,
        required : true 
    } ,
    name : {
        type : String ,
        required : true 
        // title : String 
    },
    email_id : {
        type : String ,
        required : true ,
        unique :  true 
    },
    password : { 
        type : String ,
        required : true 
    },
    hash_password : {
        type : String ,
        required : true 
    }

})


module.exports = mongoose.model('student' , Student)  ;