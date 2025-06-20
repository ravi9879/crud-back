const express = require('express');
const Log = require('../models/Login');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookiePar = require('cookie-parser') 
const fetchUser = require('../middleware/fetch_api.js');
const bcrypt = require('bcrypt')   // same as for mysql  
const {  student_login, teacher_login } = require('../controllers/adminController.js');
router.post('/login', async (req, res) => {
    try {        

        const { password, email_id } = req.body;
        const user = await Log.findOne({ email_id });    // finding data from mongo db
        if (!user) {
            res.json("user does not exist");
        }
        else {
            const valid_password = await bcrypt.compare(password, user.hash_password);
            if (!valid_password) {

                res.json("invalid credentials");
            }
            else {
                const exp = Date.now() + 1000 * 24 * 60 * 60;
                const tok = user.email_id;
                const token = jwt.sign({id : user.email_id} , "jwt-secret-key");
                // res.json(tok) ;
                cookiePar.JSONCookies("token", token) ;
                res.cookie("token", token, {
                    expires: new Date(exp),
                    // secure: true,
                    httpOnly: true
                });
                return res.send({ Status: "Success", token: tok });
            }
        }
    } catch (error) { 
        res.statusCode = 500 ;
        return res.send("error at server side") ;
        
    }
});



router.get('/fetch', fetchUser, async (req, res) => {
    try {
        // let userId = req.user.id ;
        // const user = await Log.findById(userId).select('-password')
        // console.log(req.user) ;
        res.send("data");

        // let userId = req.user.id ;
        // const user = await Log.findById(userId).select('-password')
        // console.log(req.user) ;
        // res.clearCookie("token") ;
    } catch (error) {
        console.log('error');

    }
})



router.post("/student-login" , student_login) ;
router.post("/teacher-login" , teacher_login) ; 

module.exports = router; 