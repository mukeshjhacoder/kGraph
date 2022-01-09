"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.tail = null;
  this.head = null;
}

Queue.prototype.enqueue = function (item) {
  var node = new Node(item);

  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

Queue.prototype.dequeue = function () {
  if (!this.head) {
    return 'No item';
  } else {
    var itemToPop = this.head;
    this.head = this.head.next;
    return itemToPop;
  }
};

Queue.prototype.length = function () {
  var current, counter;
  var _ref = [this.head, 0];
  current = _ref[0];
  counter = _ref[1];

  while (current) {
    counter++;
    current = current.next;
  }

  return counter;
};

Queue.prototype.peek = function () {
  if (this.head) {
    return this.head.data;
  } else {
    return 'Empty';
  }
};

Queue.prototype.isEmpty = function () {
  return this.length() < 1;
};

Queue.prototype.traverse = function (fn) {
  var current = this.head;

  while (current) {
    fn(current);
    current = current.next;
  }
};

var _default = Queue;
exports.default = _default;