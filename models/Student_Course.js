const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const Student_course = new Schema({ 
    roll_no : {
        type: String,
        required : true,
    } , 
    name : {
        type : String , 
        required : true 
    },
    course_id : {
        type : String ,
        required : true 
    },
    course_name: {
        type : String,
        required : true
    },
})


module.exports = mongoose.model('student_course' , Student_course)  ;