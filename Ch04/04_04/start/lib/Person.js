var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Persona = function (name) {
  this.name = name;
};

util.inherits(Persona, EventEmitter);

module.exports = Persona;