const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const Course = new Schema({ 
    course_id : {
        type: String ,
        required : true ,
        unique : true 
    } , 
    name : {
        type : String,
        required : true
    },
    duration : { 
        type : Number,
        required : true
    }
})


module.exports = mongoose.model('course' , Course)  ;