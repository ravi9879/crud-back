const express = require('express');
const User = require('../models/Studs')
const router = express.Router(); 
const { addCourse, teacherCourse } = require('../controllers/courseController'); 
 
router.post('/create', async (req, res) => {
    try {
        // const { sno, user_id, name, age } = req.body;
        const lo = User(req.body);
        // const lo = User(user_id , name , age ) ;
        await lo.save();   // save data to mongo db
        res.json("success");
    } catch (error) {
        console.log('errorc');
    }

});
 
router.post("/add-student-course" , addCourse ) ;
router.post("/add-teacher-course" , teacherCourse ) ;

module.exports = router ; 




// router.post('/create', [
//     body('name' , 'valid name' ).isLength({min : 5 , max : 10} )
// ] , (req , res)=> {
//     const errors = validationResult(req) ;
//     if(!errors.isEmpty()){
//         return res.json({errors : errors.array()  , msg : errors.array("msg")}) ;
//     }

//     // console.log(req.body) ;
//     const {name , id , gender} = req.body ;
//     // const f = User.findOne({id}) ;    // finding data from mongo db
//     const lo = User(req.body) ;
//     lo.save();   // save data to mongo db
//     res.send(req.body);

//     // const sql = "insert into stud  values(? , ?  ,?) ";
//     // co.query(sql,[req.body.id ,req.body.name ,req.body.sex ], (err ,data)=> {
//     //     if(err){
//     //         return res.json(err) ;
//     //     }
//     //     // const jwtData = jwt.sign(req.body.id , jwts ) ;
//     //     // return res.json(jwtData) ;
//     //     return res.json(data) ;
//     // } )

// });
