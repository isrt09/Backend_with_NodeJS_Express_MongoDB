const express = require('express');
const router  = express.Router();


// Express Custom Routes ...
// http://localhost:3000/api/user/

// Routes
router.get('/login', (req,res)=>{
    res.send('<h1>I am a GET request at Login Route</h1>');
})

router.get('/register', (req,res)=>{
    res.send('<h1>I am a GET request at Register Route</h1>');
})

module.exports = router;