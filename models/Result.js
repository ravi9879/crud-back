const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const Result = new Schema({ 
    roll_no : {
        type: String,
        required : true,
    } , 
    name: {
        type : String,
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


module.exports = mongoose.model('result' , Result)  ;