//
// // some js test
// var time = 0;
//
//  var timer = setInterval(function () {
//     time += 2;
//     console.log(time + ' seconds have passed')
//
//      if (time > 5){
//          clearInterval(timer);
//      }
// }, 2000);


   // console.log(__filename);  // some cool stuff about node


// function expression
//
// var bye = function () {
//     console.log('bye')
// };
// bye();


// // modules and require
// var stuff = require('./stuff');
// console.log(stuff.counter(['Alain', 'Regis', 'Diane']));
// console.log(stuff.adder(1, 2));



//events and util modules


var events = require('events');
var util = require('util');

// first example
// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function (mssg) {
//     console.log(mssg);
// });
// myEmitter.emit('someEvent', 'Please get out');

// second example

var person = function (name) {
    this.name = name
};

util.inherits(person, events.EventEmitter);

var james = new person('James');
var alain = new person('Alain');
var mary = new person('Mary');

var people = [james, alain, mary];

people.forEach(function (person) {
    person.on('speak', function (msg) {
        console.log(`${person.name} said: ${msg}`);
    });
});

james.emit('speak', 'hello it is me.');
alain.emit('speak', 'feels good to be home.');
mary.emit('speak', 'welcome back brother.');


