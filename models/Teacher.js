const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const Teacher = new Schema({ 
    id : {
        type: String ,
        required : true ,
        unique : true 
    } , 
    name : {
        type : String,
        required : true
    } , 
    email_id : {
        type : String ,
        unique : true , 
        required : true
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


module.exports = mongoose.model('teacher' , Teacher)  ;