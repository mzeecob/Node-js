var http = require('http');
var fs=require('fs');

// // first test
// var myReadStream = fs.createReadStream(__dirname + '/read.txt');
// var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

// // do it with out pipe
// myReadStream.on('data', function(chunk){
//     console.log("new chunk recived");
//     myWriteStream.write(chunk);
// });


// // with pipes
// myReadStream.pipe(myWriteStream);


//our servers.
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});

    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res);

    // serving JSON Data
    var myObj = {
        name: "mzee",
        job: "Programmer",
        age: 30
    }

    res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');

console.log('listening to port 3000');
