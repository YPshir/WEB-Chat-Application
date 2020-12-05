const express = require("express");

const app = express();

const port = 3000;

app.get('/home', (req,res)=>{
    return res.send("home page");
})
app.get('/login', (req,res)=>{
    return res.send("login page");
})

app.listen(port, ()=>{
    console.log(`server listening on port: ${port}`);
})
