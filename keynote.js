/*
* This module provides an API to control Keynote presentations.
*
* Author: Humberto Rodriguez Avila
*
*/
var Osascript = require('applescript');

/*  the keynote API constructor  */
var Keynote = function () {};

/*  starts the presentation or shows the next slide  */
Keynote.prototype.startOrNext = function () { 
   Osascript.execFile('./scripts/startOrNext.scpt', function(err, result){
    if (err) return console.error(err);});
};

/*  shows the previous slide  */
Keynote.prototype.prev = function () { 
    Osascript.execFile('./scripts/prev.scpt', function(err, result){
    if (err) return console.error(err);});
};


/*  export the API  */
module.exports = Keynote;

