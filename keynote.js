/*
* This module provides an API to control Keynote presentations.
*
* Author: Humberto Rodriguez Avila
*
*/
var osascript = require('applescript');

/*  the keynote API constructor  */
var Keynote = function () {};

Keynote.prototype.startOrNext = function () { 
   osascript.execFile('./scripts/startOrNext.scpt', function(err, result){
    if (err) return console.error(err);});
};

Keynote.prototype.prev = function () { 
    osascript.execFile('./scripts/prev.scpt', function(err, result){
    if (err) return console.error(err);});
};

/*  export the API  */
module.exports = Keynote;

