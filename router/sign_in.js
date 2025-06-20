const express = require("express");
const Log = require("../models/Login");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // same as for mysql
const Student = require('../models/Student');
const Student_Course = require('../models/Student_Course') ;
const Teacher_Course = require('../models/Teacher_Course') ;
const Teacher = require('../models/Teacher') ;
const Course = require('../models/Course') ;
// const { student_sign, teacher_sign } = require('../controllers/adminController');
const salt = 5;

router.post("/sign-in", async (req, res) => {
  try {
    const { name, email_id, password } = req.body;

    const user = await Log.findOne({ email_id });
    if (user) {
      res.json("user already exist");
    } else {
      const hashPassword = await bcrypt.hash(password, salt);
      const new_user = new Log({
        name,
        email_id,
        hash_password: hashPassword,
        password: password,
      });
      await new_user.save(); // save data to mongo db
      return res.json({ Status: "Success" });
    }
  } catch (error) {
    res.statusCode = 500;
    return res.send("error at server side");
  }
});

router.post("/student-sign", async (req, res, next) => {
  try {
    const { roll_no, name, email_id, password } = req.body;
    const user = await Student.findOne({ roll_no });

    if (user) {
      res.statusCode = 400;
      res.send("user already exist");
    } else {
      const hashPassword = await bcrypt.hash(password, salt);
      const new_user = new Student({
        roll_no,
        name,
        email_id,
        hash_password: hashPassword,
        password: password,
      });
      await new_user.save(); // save data to mongo db
      res.statusCode = 200;
      res.send({ Status: "Success" });
    }
  } catch (error) {
    res.statusCode = 500;
    res.send("error at server side", error);
  }
});


router.post("/teacher-sign" ,async (req, res, next) => {
    try {
        const { id, name, email_id, password } = req.body;
        const user = await Teacher.findOne({ id });
        if (user) {
            res.statusCode = 400;
            res.send("user already exist");
        }
        else {
            const hashPassword = await bcrypt.hash(password, salt);
            const new_user = new Teacher({ id, name, email_id, hash_password: hashPassword, password: password });
            await new_user.save();   // save data to mongo db
            res.statusCode = 200;
            return res.send({ Status: "Success" });
        }
    } catch (error) {
        res.statusCode = 500;
        return res.send("error at server side");
    }
}) ;

module.exports = router;
