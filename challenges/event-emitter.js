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

class EventEmitter{
  constructor(){
    //contains arrays of functions that should be called when funcName is called
    this.events={};
  }

}

EventEmitter.prototype.on = function(funcName, func) {
  //if it doesnt exist inside of events, give it an array and push in the function
  if(!this.events[funcName]){
    this.event[funcName]=[]
  }
  this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  // triggers all functions in event array in order when appropriate funcName is called
  const event = this.events[funcName];
  if(event){
    event.forEach(func){
      func.call(...args);
    }
  }
};

module.exports = EventEmitter;
