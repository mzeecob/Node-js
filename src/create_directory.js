var fs = require('fs');

// create directory
// fs.mkdirSync('stuff');

// remove directory
// fs.rmdirSync('stuff');


// with using sync functions
// create directory
fs.mkdir('stuff', function () {
    fs.readFile('read.txt', 'utf8', function (err, data) {
        fs.writeFileSync('./stuff/write.txt', data);
    })

});

// remove directory
// fs.rmdirSync('stuff');

