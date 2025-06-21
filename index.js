const mconnect = require("./db");
const express = require("express");
const cp = require("cookie-parser");
const cors = require("cors");
const dy = require("body-parser");
const app = express();

mconnect();

// {
//     // origin: ["http://localhost:3000/"],
//     methods: ["POST", "GET"],
//     credentials: true
// }

app.use(cp()); 
app.use(cors({
  origin: [
    "https://crud-one-hazel.vercel.app",
    "http://localhost:3000"
  ],
  methods: ["POST", "GET"],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(dy.json());
app.use(dy.urlencoded({ extended: true }));
app.options('*', cors());
// app.use((req , res , next) => {
//     console.log(req.cookies) ;
//     // req.isLogin = true ;
//     next() ;
// })

// app.use(require('./router/sample'));
app.use(require("./router/mid"));
app.use(require("./router/login"));
app.use(require("./router/create"));
app.use(require("./router/delete"));

app.use(require("./router/sign_in"));
app.use(require("./router/data"));
app.use(require("./router/update"));

app.get("/", (req, res) => {
  res.json("hello");
});

// app.listen(800, () => {
//   console.log("app started successsfuly");
// });

module.exports = app;
