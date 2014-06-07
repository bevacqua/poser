# poser

> Create clean arrays that you can safely extend


# Install

Using Bower

```shell
bower install -S poser
```

Using `npm`

```shell
npm install -S poser
```

# `poser()`

Gives you an `Array` instance created in another execution context.

##### Example

```js
var Array2 = require('poser')();
// <- Array

Array2.prototype.eat = function () {
  var r = this[0];
  delete this[0];
  console.log('Y U NO .shift()?');
  return r;
};

var a = new Array2(3, 5, 7);

a.eat();
// <- 3

console.log(Object.prototype.toString.call(a));
// [object Array]
```

# License

MIT
