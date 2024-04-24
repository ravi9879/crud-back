const express = require('express') ;
const Log = require('../models/Login')
const router = express.Router() ; 
const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcrypt')   // same as for mysql 
 

router.post('/sample',async (req , res)=> { 
    const {id} = req.body ;
    
    // res.send(f); 
    // res.send("ok") ;

    // if(!user) {
    //     res.send("user doesn't exist") ;

    // }

    // const valid_password = await bcrypt.compare(password , user.hash_password) ;
    // if(!valid_password) {
    //     res.json("invalid credentials");
    // } 
    const tok = jwt.sign({id : id} , "jwt-secret-key"  );
    // const token = req.header('tok') ;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzAyMTQxNTY0fQ.8AD2FhZjotIXSu4ku0VzuqoTZR3m-oaSgK0136yr16w" ;
    const data = jwt.verify(token , "jwt-secret-key" ); 
    // res.cookie("token" , tok );
    // console.log(tok) ; 
    // const user = await Log.findOne({name}) ;    // finding data from mongo db
    // res.json(user) ;    // printing the data 
    return res.json( {data} );
    // return res.json(tok) ;  
    
}) ;



router.get('/sample',(req , res)=> {
    console.log(req.body) ;
    const {name , email, password} = req.body ;
    const f = Log.findOne({name}) ;    // finding data from mongo db
    if(f) {
        console.log("found")
    } 
    else {
        console.log("no") ;
    }
    const lo = Log(req.body) ; 
    lo.save();   // save data to mongo db
    res.send(req.body);
}) ;

module.exports = router  ; 