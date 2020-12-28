const express = require("express");
const config = require('./config/app');
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // for uploading images
app.use(cors());
app.use(router);

const port = config.appPort;

app.listen(port, ()=>{
    console.log(`server listening on port: ${port}`);
})
