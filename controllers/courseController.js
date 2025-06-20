const Student = require("../models/Student");
const Student_Course = require("../models/Student_Course");
const Teacher_Course = require("../models/Teacher_Course");

const addCourse = async (req, res, next) => {
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
};

const deleteCourse = async (req, res, next) => {
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
};

const teacherCourse = async (req, res, next) => {
  try {
    const data = Teacher_Course(req.body);
    // console.log(data) ;
    await data.save();
    res.send("added");
  } catch (error) {
    res.send("error");
  }
};

const marksData = async (req, res, next) => {
  try {
    const name = req.params.name;
    const { course_name, course_id } = req.body;
    // console.log(course_id , course_name) ;
    const data = await Student_Course.find({ course_name: name });
    // console.log(data) ;
    res.send(data);
  } catch (error) {
    res.send("error");
  }
};

exports.teacherCourse = teacherCourse;
exports.addCourse = addCourse;
exports.marksData = marksData;
exports.deleteCourse = deleteCourse;
