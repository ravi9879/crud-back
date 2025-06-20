const express = require('express');
const User = require('../models/Studs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator');

router.post('/update', async (req, res) => {
    try {
        const { sno, value, update , user_id } = req.body;

        const { name, age } = await User.findOne({ sno: sno, user_id: user_id });
        // res.json(name) ;
        // res.json(id , value , update) ; 

        if (value === 'age') {
            const new_user = new User({ sno, name, age: update , user_id: user_id });
            const f = await User.deleteOne({ sno });    // finding data from mongo db
            await new_user.save();   // save data to mongo db
            // console.log(f);
            res.statusCode = 200 ;
            return res.send({ Status: "Success" });
        }


        if (value === 'name') {
            const new_user = new User({ sno, name: update, age , user_id: user_id });
            const f = await User.deleteOne({ sno });    // finding data from mongo db 
            await new_user.save();   // save data to mongo db
            // console.log(f);
            res.statusCode = 200 ;
            return res.send({ Status: "Success" });
        }

    } catch (error) {
        res.statusCode = 500 ;
        return res.send("error at server side") ;
    }
});


module.exports = router; 