const express = require('express');
const User = require('../models/Studs')
const router = express.Router(); 

const salt = 5;

const { body, validationResult } = require('express-validator');
// const { deleteCourse } = require('../controllers/courseController');
router.post('/delete', async (req, res) => {
    try {
        const { sno , user_id } = req.body;
        const f = await User.deleteOne({ sno : sno , user_id: user_id });    // finding data from mongo db
        // console.log(f) ;
        if (f.deletedCount === 0) {
          res.json("No");
        }
        else {
            res.send("Success");
        }
    } catch (error) {
        res.statusCode = 500 ;
        return res.send("error at server side") ;
    }
});


router.post('/delete-course' , async (req, res, next) => {
  try {
    const { roll_no, course_name, course_id } = req.body;
    const userData = await Student_Course.deleteOne({
      roll_no: roll_no,
      // courseId: course_id,
      course_name: course_name,
    }); 
    console.log(userData) ;
    if (userData.deletedCount === 0) {
      // res.statusCode = 400;
      res.send("No Entry");
    } else {
      // res.statusCode = 200;
      res.send("Deleted");
    } 
  } catch (error) {
    res.send("error");
  }
}) ;


module.exports = router; 