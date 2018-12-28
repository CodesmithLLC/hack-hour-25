/* eslint-disable func-names */
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


function EventEmitter(func) {
  this.events = {};
}

EventEmitter.prototype.on = function (funcName, func) {
  if (!this.events[funcName]) this.events[funcName] = [func];
  else this.events[funcName].push(func);
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
  this.events[funcName].forEach((event) => {
    event();
  });
  if (args) {
    args.forEach((event) => {
      this.events[event].forEach((func) => {
        func();
      });
    });
  }
};

const instance = new EventEmitter();
let counter = 0;
instance.on('increment', () => {
  counter += 1;
});

instance.on('decrement', () => {
  counter -= 1;
});

console.log(instance.events);
instance.trigger('increment');
console.log('Counter: ', counter); // counter should be 1
instance.trigger('increment');
console.log('Counter: ', counter); // counter should be 2
instance.trigger('decrement');
console.log('Counter: ', counter); // counter should be 1
instance.trigger('increment', 'decrement');
console.log('Counter: ', counter); // counter should be 2

module.exports = EventEmitter;
