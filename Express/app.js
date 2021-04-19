const express    = require('express');
const app        = express();
const userRoute  = require('./routes/users.route');

app.use("/api/user/",userRoute);
// Express Default Routes

app.get('/', (req,res)=>{
    res.send('I am a GET request at HOME Route');
})

app.use((req, res)=>{
    res.send("<h1>404: Sorry Invalid URL !</h1>");
})

module.exports = app;