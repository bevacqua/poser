/**
 * poser - Create clean arrays that you can safely extend
 * @version v1.0.3
 * @link https://github.com/bevacqua/poser
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.poser=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
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

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbmljby9uaWNvL2dpdC9wb3Nlci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL25pY28vbmljby9naXQvcG9zZXIvc3JjL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBkID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIGZyYW1lcyA9IGdsb2JhbC5mcmFtZXM7XG52YXIga2V5ID0gJ3N0b2xlbi1hcnJheS1nb25lLXNvb24nLnNwbGl0KCcnKS5qb2luKCdfXycpO1xuXG5mdW5jdGlvbiBwb3NlciAoKSB7XG4gIHZhciBpZnJhbWUgPSBkLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG5cbiAgdmFyIGFsdGRvbSA9IGZyYW1lc1tmcmFtZXMubGVuZ3RoIC0gMV0uZG9jdW1lbnQ7XG4gIGFsdGRvbS53cml0ZSgnPHNjcmlwdD5wYXJlbnRbXCInICsga2V5ICsgJ1wiXT1BcnJheTs8XFwvc2NyaXB0PicpO1xuXG4gIHZhciBib3Jyb3dlZCA9IGdsb2JhbFtrZXldO1xuICBkZWxldGUgZ2xvYmFsW2tleV07IC8vIHBvbGx1dGlvbi1mcmVlIGVudmlyb25tZW50IVxuICByZXR1cm4gYm9ycm93ZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcG9zZXI7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIl19
(1)
});
