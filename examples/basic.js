var Array2 = require('..').Array();
// <- Array

Array2.prototype.eat = function () {
  var r = this[0];
  delete this[0];
  console.log('Y U NO .shift()?');
  return r;
};

var a = new Array2(3, 5, 7);

console.log(a.eat());
// <- 3

console.log(Object.prototype.toString.call(a));
// <- [object Array]

console.log(Array === Array2);
// <- false
