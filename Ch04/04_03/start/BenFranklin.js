var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Persona = function (nombre) {
  this.nombre = nombre;
};

util.inherits(Persona, EventEmitter);

var rick = new Persona("Rick Sanchez");

rick.on('hablar', function (dijo) {

  console.log(`${this.nombre}: ${dijo}`);

});


rick.emit('hablar', "Wubba Lubba Dub Dub");
