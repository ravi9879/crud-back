const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const Teacher_course = new Schema({ 
    id : {
        type: String ,
        required : true 
    } , 
    course_id : {
        type : String,
        required : true
    },
    name :{
        type : String , 
        required : true 
    } 
})


module.exports = mongoose.model('teacher_course' , Teacher_course)  ;