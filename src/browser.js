'use strict';

var d = global.document;
var frames = global.frames;

function poser (type) {
  var iframe = d.createElement('iframe');
  
  iframe.style.display = 'none';
  d.body.appendChild(iframe);

  return iframe.contentWindow[type];
}

module.exports = poser;
