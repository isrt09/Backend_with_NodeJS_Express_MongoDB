const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Hello Express JS');
});
app.post('/about', function(req, res){
    res.send('Hello About Page');
});
app.put('/blog', function(req, res){
    res.send('Hello Blog Page');
});
app.delete('/contact', function(req, res){
    res.send('Hello Contact Page');
});

app.listen(7000, function(){
    console.log('Server run success...');
})
