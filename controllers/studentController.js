const Student = require('../models/Student') ;
const Student_Course = require('../models/Student_Course') ;

const student_data = async (req , res , next) => { 
    const roll_no = req.params.roll_no ;
    const data = await Student.find({roll_no}) ; 
    res.send(data) ;
}

const course_data = async (req , res , next) => {
    const roll_no = req.params.roll_no ;
    const data = await Student_Course.find({roll_no}) ;
    res.send(data) ;
}

exports.course_data = course_data ;
exports.student_data = student_data ;