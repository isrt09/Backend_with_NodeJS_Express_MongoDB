const express    = require('express');
const app        = express();
const userRoute  = require('./routes/users.route');

app.use("/api/user/",userRoute);

app.use("/login", (req,res)=>{
    res.send('Hi, I am login Page');
});

app.use("/register", (req,res)=>{
    res.send("Hi, I am Register Page");
}) 

app.use("/json", (req, res)=>{
    // res.status(200).json({
    //     name       :'Mazedur Rahman',
    //     statusCode : 200
    // });
    res.redirect('/login');
})
// Express Default Routes

app.get('/', (req,res)=>{
    //res.send('I am a GET request at HOME Route');
    res.sendFile(__dirname+"/views/index.html")
})

app.use((req, res)=>{
    res.send("<h1>404: Sorry Invalid URL !</h1>");
})

module.exports = app;