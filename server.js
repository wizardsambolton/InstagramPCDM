var express = require('express');
var app = express();
var port = 8000;
var API = require("./api.js");
app.use("*",function(req,res,next){
    console.log(req.method + " " + req.originalUrl);
    next();
});

app.get('/', function(req, res){
  res.send('hello world');
});
app.get('/api/send/message', function(req, res){
   API.sendMessage("wzrdsmbltn",req.query.message,function() {
       res.send("Message sent!");
   });
});

app.get('/api/list/following',function(req,res){
    API.listFollowing(function(data){
        res.send(data);
    });
});
app.get('/api/list/threads',function(req,res){
    API.listThreads(function(data){
        res.send(data);
    });
});

app.listen(port);
console.log("I'm listening on " + port);
