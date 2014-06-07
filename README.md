# poser

> Create clean arrays, _or anything else_, which you can safely extend


# Install

Using Bower

```shell
bower install -S poser
```

Using `npm`

```shell
npm install -S poser
```

# `poser(type)`

Gives you the `type` global from another execution context. The context is different every time, giving you references in different contexts.

## `poser.Array()`

Shortcut to get an `Array` from another context. Equivalent to `poser('Array')`.

## `poser.Object()`

Shortcut to get an `Object` from another context. Equivalent to `poser('Object')`.

## `poser.Function()`

Shortcut to get an `Function` from another context. Equivalent to `poser('Function')`.

## `poser.Date()`

Shortcut to get an `Date` from another context. Equivalent to `poser('Date')`.

## `poser.String()`

Shortcut to get an `String` from another context. Equivalent to `poser('String')`.

##### Example

```js
var Array2 = require('poser').Array();
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
// <- [object Array]

console.log(Array === Array2);
// <- false
```

# License

MIT
