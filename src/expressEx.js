var express = require('express');

var app = express();

app.set('view engine', 'ejs')

// respond with html page
app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

// access the parameter in url like id
app.get('/profile/:id', function(req, res){
    var data = {age: 21, job: 'Programmer', hobbie: ['basket ball', 'fight', 'eat']}
    res.render('profile', {person: req.params.id, data: data});
})

app.listen(3000);