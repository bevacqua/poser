'use strict';

var vm = require('vm');

function stealArray () {
  var sandbox = {};
  vm.runInNewContext('stolen=Array;', sandbox, 'poser.vm');
  return sandbox.stolen;
}

module.exports = stealArray;
