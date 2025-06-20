const express = require('express');
const User = require('../models/Studs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator'); 
// const { student_data, course_data } = require('../controllers/studentcontroller');
// const { teacher_data, teacher_course_data } = require('../controllers/teachercontroller');
// const { marksData } = require('../controllers/courseController');


router.get('/studs/:user_id', async (req, res) => {
// router.get('/studs' , async (req , res)=> {
    try { 
        const f = await User.find({user_id : req.params.user_id});    // finding all  data from mongo db like (select * in mysql)
        // const f = await User.find({});    // finding all  data from mongo db like (select * in mysql)
        return res.json(f); 
    } catch (error) {
        console.log('error');
    }
});

router.get('/data/:user_id', async (req, res) => {
    // router.get('/studs' , async (req , res)=> {
    try {
        const token = req.cookies ;  
        // const token = req.get('Cookie').split('=') || false ;  
        // const decoded = jwt.verify(token, "jwt-secret-key");
        // const user_id = decoded.id;
        const user_id = req.params.user_id ;
        console.log(token);
        // const user_id = jwt.decode(token , {complete : true} ) ;
        // console.log(token , user_id) ;
        // console.log(ans.payload.id) ;
        // const f = await User.find({user_id : user_id.payload.id});    // finding all  data from mongo db like (select * in mysql)
        const f = await User.find({ user_id }); 
        res.statusCode = 200 ;   // finding all  data from mongo db like (select * in mysql)
        return res.send(f);
    } catch (error) { 
        res.statusCode = 500 ;
        return res.send("error at server side") ;
    }
});
 

// router.get('/student-data/:roll_no' , student_data) ;
// router.get('/student-course-data/:roll_no' , course_data) ;
// router.get('/teacher-data/:id' , teacher_data) ;
// router.get('/teacher-course-data/:id' , teacher_course_data) ;
// router.get('/marks-data/:name' , marksData) ;

module.exports = router; 