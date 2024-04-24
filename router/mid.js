const express = require('express') ;
const router = express.Router() ; 

router.post('/mid',(req , res)=> {
    // oj = {
    //     a : 1234  
    // }
    // res.json(oj);
    // console.log(req.body) ;
    // res.send('welcome') ; 
    res.send(req.body) ;
    console.log(req.body) ;

});


module.exports = router  ; 