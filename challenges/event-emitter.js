

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
  this.listener = {};
}

EventEmitter.prototype.on = function addListener(funcName, func) {
  if (this.listener[funcName]) {
    this.listener[funcName].push(func);
  } else {
    this.listener[funcName] = [func];
  }
};

EventEmitter.prototype.trigger = function triggerListener(funcName, ...args) {
  if (this.listener[funcName]) {
    this.listener[funcName].forEach(func => func(...args));
  }
};
/* 
const instance = new EventEmitter();
let counter = 0;
console.log('counter first: ', counter);
instance.on('increment', () => {
  counter++;
}); // counter should be 0
instance.trigger('increment', 1); // counter should be 1
console.log('counter after trigger once: ', counter);
instance.trigger('increment', 2, 4);
console.log('counter after trigger twice: ', counter);
*/

module.exports = EventEmitter;
