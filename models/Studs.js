const mongoose = require("mongoose") ;
const {Schema} = mongoose ;

const StSchema = new Schema({ 
    sno : {
        type: Number ,
        required : true 
    } ,
    // id : {  
    //     type : String,
    //     required : true ,
    //     // unique : true 
    // },
    name : {
        type : String,
        required : true
    },
    age : { 
        type : Number,
        required : true
    }, 
    user_id :{
        type : String ,
        required : true 
    }
})


module.exports = mongoose.model('stud' , StSchema)  ;