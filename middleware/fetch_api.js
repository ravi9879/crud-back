// const jwt = require('jsonwebtoken') ;
const Lo = require('../models/Login')

const fetchUser = async (req, res, next) => {
    try {
        const tok = req.cookies ;
        // const id_ = req. 
        // const tok = req.header('auth-token') ;
        // if(!tok ) {
        //     res.send('error')
        // } 
        // document.cookie = "hi" ;
        console.log("Hi", tok);
        // console.log("Hi", req.headers.cookie);
        
        // const data = tok ; 
        // const data = jwt.verify(tok , "jwt-secret-key")
        const user = Lo.findOne({ id: req.cookies.token });
        req.user = user;
        // res.json(data) ;
        next();
    } catch (error) {
        console.log('error');
    }
}

module.exports = fetchUser;