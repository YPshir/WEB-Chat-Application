const router = require('express').Router();

router.get('/home', (req,res)=>{
    return res.send("home page");
})

router.use('/', require('./auth')); // In order for us to have access to routes in another file

module.exports = router;