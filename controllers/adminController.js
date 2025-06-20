const Student = require("../models/Student");
const Teacher = require("../models/Teacher");
const bcrypt = require('bcrypt') ;

const salt = 10;

const student_sign = async (req, res, next) => {
    try {
        const { roll_no, name, email_id, password } = req.body;
        const user = await Student.findOne({ roll_no });
        
        if (user) {
            res.statusCode = 400;
            res.send("user already exist");
        }
        
        else {
            const hashPassword = await bcrypt.hash(password, salt);
            const new_user = new Student({ roll_no, name, email_id, hash_password: hashPassword, password: password });
            await new_user.save();   // save data to mongo db
            res.statusCode = 200; 
            res.send({ Status: "Success" });
        } 
    } catch (error) {
        res.statusCode = 500;
        res.send("error at server side" , error);
    }
}

const teacher_sign = async (req, res, next) => {
    try {
        const { id, name, email_id, password } = req.body;
        const user = await Teacher.findOne({ id });
        if (user) {
            res.statusCode = 400;
            res.send("user already exist");
        }
        else {
            const hashPassword = await bcrypt.hash(password, salt);
            const new_user = new Teacher({ id, name, email_id, hash_password: hashPassword, password: password });
            await new_user.save();   // save data to mongo db
            res.statusCode = 200;
            return res.send({ Status: "Success" });
        }
    } catch (error) {
        res.statusCode = 500;
        return res.send("error at server side");
    }
}

const student_login = async (req, res, next) => {
    try {
        // req.islogin = true ;
        const { roll_no, password } = req.body;
        const user = await Student.findOne({ roll_no });    // finding data from mongo db
        if (!user) {
            res.json("user does not exist");
        }
        else {
            const valid_password = await bcrypt.compare(password, user.hash_password);
            if (!valid_password) {
                res.statusCode = 400;
                res.send("invalid credentials");
            }
            else {
                const exp = Date.now() + 1000 * 60 * 60 * 24;
                const token = user.roll_no;
                // const token = jwt.sign({id : user.email_id} , "jwt-secret-key"); 
                // const decoded = jwt.verify(token, "jwt-secret-key");  
                res.cookie("token", token, {
                    expires: new Date(exp),
                });

                // return res.send({ Status: "Success", token: tok , islogin : islogin });
                // console.log(user) 
                // req.islogin = true ;
                res.statusCode = 200;
                return res.send({ Status: "Success", token: token });
            }
        }
    } catch (error) {
        res.statusCode = 500;
        return res.send("error at server side");

    }
}

const teacher_login = async (req, res, next) => {
    try {
        // req.islogin = true ; 
        const { id , password } = req.body;
        const user = await Teacher.findOne({ id });    // finding data from mongo db
        if (!user) {
            res.json("user does not exist");
        }
        else {
            const valid_password = await bcrypt.compare(password, user.hash_password);
            if (!valid_password) {
                res.statusCode = 400;
                res.send("invalid credentials");
            }
            else {
                const exp = Date.now() + 1000 * 60 * 60 * 24;
                const token = user.id;
                // const token = jwt.sign({id : user.email_id} , "jwt-secret-key"); 
                // const decoded = jwt.verify(token, "jwt-secret-key");  
                res.cookie("token", token, {
                    expires: new Date(exp),
                });

                // return res.send({ Status: "Success", token: tok , islogin : islogin });
                // console.log(user) 
                // req.islogin = true ;
                res.statusCode = 200;
                return res.send({ Status: "Success", token: token });
            }
        }
    } catch (error) {
        res.statusCode = 500;
        return res.send("error at server side");
    }
}



exports.student_sign = student_sign ;
exports.student_login = student_login ;
exports.teacher_sign = teacher_sign ;
exports.teacher_login = teacher_login ;


