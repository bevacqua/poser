'use strict';

var vm = require('vm');

function poser (type) {
  var sandbox = {};
  vm.runInNewContext('stolen=' + type + ';', sandbox, 'poser.vm');
  return sandbox.stolen;
}

module.exports = poser;
