var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('this is home page');
});

app.listen(3000);