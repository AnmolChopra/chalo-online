let express = require('express');
let cors = require('cors');
let bodyparser = require('body-parser');
var cron = require('node-cron');
let path = require('path');
let http = require('http');
let app = express();
app.use(express.static(__dirname+'/dist/frontend'));
app.get('*',(req,res)=>{ return res.sendFile(path.join(__dirname,'/dist/frontend/index.html'))});
const server=http.createServer(app);
app.use(cors());
app.use(bodyparser.json());

server.listen(1234,()=>{
    console.log("Running at localhost 2456")
})