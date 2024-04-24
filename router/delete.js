const express = require('express');
const User = require('../models/Studs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator');


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
        console.log('error');
    }
});


module.exports = router; 