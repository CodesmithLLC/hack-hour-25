'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.events = {};    
}

EventEmitter.prototype.on = function(funcName, func) {
  // Add event with callback to array
  // Goal is for this.events to look like {funcName: [func,...]}
  if (this.events.hasOwnProperty(funcName)) {
    this.events[funcName].push(func);
  } else {
    this.events[funcName] = [func];
  }
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  // if event has been defined, cycle thru each of it's call backs
  if(this.events.hasOwnProperty(funcName)) {
    for (let i = 0; i < this.events[funcName].length; i += 1) {
      this.events[funcName][i](...args);
    }
  }
};

module.exports = EventEmitter;
