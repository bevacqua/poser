'use strict';

var d = global.document;
var frames = global.frames;
var key = 'stolen, but no problem, just a poser';

function poser (type) {
  var iframe = d.createElement('iframe');
  var altdom;
  var stolen;

  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  altdom = frames[frames.length - 1].document;
  altdom.write('<script>parent["' + key + '"]=' + type + ';<\/script>');

  stolen = global[key];
  delete global[key]; // pollution-free environment!

  return stolen;
}

module.exports = poser;
