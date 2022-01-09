"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  this.top = null;
}

Stack.prototype.push = function (item) {
  var node = new Node(item);

  if (this.top) {
    node.next = this.top;
    this.top = node;
  } else {
    this.top = node;
  }
};

Stack.prototype.pop = function () {
  if (this.top) {
    var itemToPop = this.top;
    this.top = this.top.next;
    return itemToPop.data;
  } else {
    return false;
  }
};

Stack.prototype.peek = function () {
  if (this.top) {
    return this.top.data;
  } else {
    return null;
  }
};

Stack.prototype.reverse = function () {
  var current = this.top;
  var prev = null;

  while (current) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.top = prev;
};

Stack.prototype.length = function () {
  var current = this.top;
  var counter = 0;

  while (current) {
    counter++;
    current = current.next;
  }

  return counter;
};

Stack.prototype.search = function (item) {
  var current = this.top;

  while (current) {
    if (current.data === item) return true;
    current = current.next;
  }

  return false;
};

Stack.prototype.isEmpty = function () {
  return this.length() < 1;
};

Stack.prototype.traverse = function (fn) {
  var current = this.top;

  while (current) {
    fn(current);
    current = current.next;
  }
};

var _default = Stack;
exports.default = _default;