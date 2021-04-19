var  express  = require('express');
var  app      = express();

app.use(function(req, res, middle){
    console.log('I am middle');
    middle();
})

// Midlleware Workflow ...
app.get('/', function(req, res, middle){
    res.send('Home Page');
})

app.get('/home', function(req, res){
    res.send('Hello Nodemon for Express');
})

// URL Port Setup
app.listen(7000, function(){
    console.log('Server run success...');
})





