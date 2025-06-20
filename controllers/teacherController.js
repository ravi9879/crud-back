const Teacher = require('../models/Teacher') ;
const Teacher_Course = require('../models/Teacher_Course') ;

const teacher_data = async (req , res , next) => {
    const id = req.params.id ;
    const data = await Teacher.find({id}) ; 
    res.send(data) ;
}

const teacher_course_data = async (req , res , next) => {
    const id= req.params.id ; 
    const data = await Teacher_Course.find({id}) ; 
    res.send(data) ;
}

exports.teacher_course_data = teacher_course_data ;
exports.teacher_data = teacher_data ;