const express = require("express");
const config = require('./config/app')
const app = express();

const port = config.appPort;

app.get('/home', (req,res)=>{
    return res.send("home page");
})
app.get('/login', (req,res)=>{
    return res.send("login page");
}) 

app.listen(port, ()=>{
    console.log(`server listening on port: ${port}`);
})
