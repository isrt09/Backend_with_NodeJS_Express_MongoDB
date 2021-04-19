const express = require('express');
const app     = express();

// HTTP Methods using POSTMAN
// GET, POST, PUT, DELETE

app.get('/', (req,res)=>{
    res.send('I am a GET request at HOME Route');
})

app.post('/', (req,res)=>{
    res.send('I am a POST request at HOME Route');
})

app.put('/', (req,res)=>{
    res.send('I am a PUT request at HOME Route');
})

app.delete('/', (req,res)=>{
    res.send('I am a DELETE request at HOME Route');
})



module.exports = app;