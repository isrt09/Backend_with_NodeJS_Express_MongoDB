const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Hello Express JS');
});

app.listen(7000, function(){
    console.log('Server run success...');
})
