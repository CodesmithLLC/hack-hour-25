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
	this.event = {};
}

EventEmitter.prototype.on = function(funcName, func) {
	if (func === undefined || !(func instanceof Function)) return;
	if (typeof funcName !== 'string') return;
	if (this.event[funcName]) this.event[funcName].push(func);
	else this.event[funcName] = [func];
	return;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
	if (!this.event[funcName]) return;
	this.event[funcName].map(func => func(...args));
	return;
};

module.exports = EventEmitter;

// const instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() { counter++ })
// instance.on('increment', function() { console.log('hi') })
// instance.trigger('increment');

// console.log(counter)