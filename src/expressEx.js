var express = require('express');

var app = express();

app.set('view engine', 'ejs')

// respond with html page
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// access the parameter in url like id
app.get('/profile/:id', function(req, res){
    res.send("you have request the user with this id " + req.params.id);
})

app.listen(3000);