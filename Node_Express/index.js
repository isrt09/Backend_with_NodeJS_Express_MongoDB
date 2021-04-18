const express = require('express')
const app = express();

// Response get Method
app.get('/', function(req, res){
    res.send('Hello Express JS');
});

// Response post Method
app.post('/about', function(req, res){
    res.send('Hello About Page');
});
// Response put Method
app.put('/blog', function(req, res){
    res.send('Hello Blog Page');
});

// Response delete Method
app.delete('/contact', function(req, res){
    res.send('Hello Contact Page');
});

// String Response
app.get('/career', function(req, res){
    res.end('This is demo text version ...');
});

// Status Response
app.get('/service', function(req,res){
    res.status(401).end('Unauthorized user');
})

// JSON Response
app.get('/json', function(req,res){
    let data =  [
        {
            name : 'IBCS-PRIMAX',
            age  :  '35',
            dob  :  '20-11-1985'
        },
        {
            name : 'IBCS-PRIMAX',
            age  :  '55',
            dob  :  '10-11-1985'
        },
        {
            name : 'IBCS-PRIMAX',
            age  :  '45',
            dob  :  '23-11-1985'
        },
    ]
    res.json(data);
})

// Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})

