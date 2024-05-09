const express = require('express');
const User = require('../models/Studs')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')   // same as for mysql 

const salt = 5;

const { body, validationResult } = require('express-validator');
// const fetchUser = require('../middleware/fetch_api.js');

// const get_id = window.localStorage.getItem("token") ;

router.get('/studs/:user_id', async (req, res) => {
// router.get('/studs' , async (req , res)=> {
    try { 
        // const f = await User.find({user_id : req.params.user_id});    // finding all  data from mongo db like (select * in mysql)
        const f = await User.find({});    // finding all  data from mongo db like (select * in mysql)
        return res.json(f); 
    } catch (error) {
        console.log('error');
    }
});


module.exports = router; 