const express = require('express');
const User = require('../models/Studs')
const router = express.Router(); 
const Student = require('../models/Student');
const Student_Course = require('../models/Student_Course') ;
const Teacher_Course = require('../models/Teacher_Course') ;
// const { addCourse, teacherCourse } = require('../controllers/courseController'); 
 
router.post('/create', async (req, res) => {
    try {
        // const { sno, user_id, name, age } = req.body;
        const lo = User(req.body);
        // const lo = User(user_id , name , age ) ;
        await lo.save();   // save data to mongo db
        res.json("success");
    } catch (error) {
        console.log('errorc');
    }

});
 
router.post("/add-student-course" ,async (req, res, next) => {
  try {
    const { roll_no, course_name, course_id } = req.body;
    const userData = await Student.find({ roll_no });
    // console.log(userData[0].name) ;
    const data = Student_Course({
      roll_no,
      name: userData[0].name,
      course_id,
      course_name,
    });
    // console.log(data) ;
    await data.save();
    res.send("added");
  } catch (error) {
    res.send("error");
  }
} ) ;

router.post("/add-teacher-course" , async (req, res, next) => {
  try {
    const data = Teacher_Course(req.body);
    // console.log(data) ;
    await data.save();
    res.send("added");
  } catch (error) {
    res.send("error");
  }
}
 ) ;

module.exports = router ; 




// router.post('/create', [
//     body('name' , 'valid name' ).isLength({min : 5 , max : 10} )
// ] , (req , res)=> {
//     const errors = validationResult(req) ;
//     if(!errors.isEmpty()){
//         return res.json({errors : errors.array()  , msg : errors.array("msg")}) ;
//     }

//     // console.log(req.body) ;
//     const {name , id , gender} = req.body ;
//     // const f = User.findOne({id}) ;    // finding data from mongo db
//     const lo = User(req.body) ;
//     lo.save();   // save data to mongo db
//     res.send(req.body);

//     // const sql = "insert into stud  values(? , ?  ,?) ";
//     // co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> {
//     //     if(err){
//     //         return res.json(err) ;
//     //     }
//     //     // const jwtData = jwt.sign(req.body.id , jwts ) ;
//     //     // return res.json(jwtData) ;
//     //     return res.json(data) ;
//     // } )

// });
