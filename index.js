/*
* This module allows you to control your keynote presentations using a bbc micro:bit
*
* Author: Humberto Rodriguez Avila
*
* Example:
*
* sudo node index.js
* 
*/

var BBCMicrobit = require('bbc-microbit');
var KeynoteAPI = require("./keynote");
var keynote = new KeynoteAPI();

console.log('Scanning for microbit...');
BBCMicrobit.discover(function(microbit) {
  console.log('Discovered microbit: %s', microbit.address);
  
  microbit.on('disconnect', function() {
    console.log('Microbit disconnected!');
    process.exit(0);
  });

  microbit.on('buttonAChange', function(value) {
    if(value == 1) keynote.prev();
  });

  microbit.on('buttonBChange', function(value) {
    if(value == 1) keynote.startOrNext();
  });

  console.log('Connecting microbit...');
  microbit.connectAndSetUp(function() {
    console.log('Status: Connected');
    console.log('Initializing...');
    microbit.subscribeButtons(function(){});
    console.log('Ready!');
    microbit.writeLedText('Ready!', function(){});
  });
});
