const express = require('express');
const Log = require('../models/Login')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql  
const { student_sign, teacher_sign } = require('../controllers/adminController');
const salt = 5;

router.post('/sign-in', async (req, res) => {
    try {
        const { name, email_id, password } = req.body;

        const user = await Log.findOne({ email_id });
        if (user) {
            res.json("user already exist");
        } 
        else {
            const hashPassword = await bcrypt.hash(password, salt);
            const new_user = new Log({ name, email_id, hash_password: hashPassword, password: password });
            await new_user.save();   // save data to mongo db
            return res.json({ Status: "Success" });
        } 
    }catch (error) {
        res.statusCode = 500 ;
        return res.send("error at server side") ;
    }


});

router.post("/student-sign" , student_sign) ;
router.post("/teacher-sign" , teacher_sign) ;

module.exports = router; 