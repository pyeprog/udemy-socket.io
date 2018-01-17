var moment = require('moment');

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createAt = 1234;
var date = moment(createAt);
date.add(1, 'y').subtract(9, 'M');
console.log(date.format('MMM Do YYYY'));

console.log(date.format('h:mm A'));
