'use strict';

var d = global.document;
var frames = global.frames;
var key = 'stolen-array-gone-soon'.split('').join('__');

function poser () {
  var iframe = d.createElement('iframe');
  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  var altdom = frames[frames.length - 1].document;
  altdom.write('<script>parent["' + key + '"]=Array;<\/script>');

  var borrowed = global[key];
  delete global[key]; // pollution-free environment!
  return borrowed;
}

module.exports = poser;
