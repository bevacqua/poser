'use strict';

var d = global.document;
var frames = global.frames;
var key = 'stolen, but no problem, just a poser';

function poser (type) {
  var iframe = d.createElement('iframe');
  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  var altdom = frames[frames.length - 1].document;
  altdom.write('<script>parent["' + key + '"]=window.' + type + ';<\/script>');

  var stolen = global[key];
  delete global[key]; // pollution-free environment!
  return stolen;
}

module.exports = poser;
