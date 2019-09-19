var fs = require('fs');

// //**sync function** always need to be done to do other codes
// var read = fs.readFileSync('read.txt', 'utf8');
// fs.writeFileSync('wite.txt', read);
// console.log(read);


//**non sync function** it keeps program running and fire the fun() when it done reading
//  fs.readFile('read.txt', 'utf8', function (err, data) {
//      console.log(data);
//  });

// fs.writeFileSync('write.txt', read);
// console.log('read');


//delete files
// fs.unlinkSync('write.txt');
