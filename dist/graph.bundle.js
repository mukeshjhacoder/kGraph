/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./compiled/kashish/graph/kGraph.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./compiled/kashish/ds/queue.js":
/*!**************************************!*\
  !*** ./compiled/kashish/ds/queue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction Node(data) {\n  this.data = data;\n  this.next = null;\n}\n\nfunction Queue() {\n  this.tail = null;\n  this.head = null;\n}\n\nQueue.prototype.enqueue = function (item) {\n  var node = new Node(item);\n\n  if (!this.head) {\n    this.head = node;\n    this.tail = node;\n  } else {\n    this.tail.next = node;\n    this.tail = node;\n  }\n};\n\nQueue.prototype.dequeue = function () {\n  if (!this.head) {\n    return 'No item';\n  } else {\n    var itemToPop = this.head;\n    this.head = this.head.next;\n    return itemToPop;\n  }\n};\n\nQueue.prototype.length = function () {\n  var current, counter;\n  var _ref = [this.head, 0];\n  current = _ref[0];\n  counter = _ref[1];\n\n  while (current) {\n    counter++;\n    current = current.next;\n  }\n\n  return counter;\n};\n\nQueue.prototype.peek = function () {\n  if (this.head) {\n    return this.head.data;\n  } else {\n    return 'Empty';\n  }\n};\n\nQueue.prototype.isEmpty = function () {\n  return this.length() < 1;\n};\n\nQueue.prototype.traverse = function (fn) {\n  var current = this.head;\n\n  while (current) {\n    fn(current);\n    current = current.next;\n  }\n};\n\nvar _default = Queue;\nexports.default = _default;\n\n//# sourceURL=webpack:///./compiled/kashish/ds/queue.js?");

/***/ }),

/***/ "./compiled/kashish/ds/stack.js":
/*!**************************************!*\
  !*** ./compiled/kashish/ds/stack.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction Node(data) {\n  this.data = data;\n  this.next = null;\n}\n\nfunction Stack() {\n  this.top = null;\n}\n\nStack.prototype.push = function (item) {\n  var node = new Node(item);\n\n  if (this.top) {\n    node.next = this.top;\n    this.top = node;\n  } else {\n    this.top = node;\n  }\n};\n\nStack.prototype.pop = function () {\n  if (this.top) {\n    var itemToPop = this.top;\n    this.top = this.top.next;\n    return itemToPop.data;\n  } else {\n    return false;\n  }\n};\n\nStack.prototype.peek = function () {\n  if (this.top) {\n    return this.top.data;\n  } else {\n    return null;\n  }\n};\n\nStack.prototype.reverse = function () {\n  var current = this.top;\n  var prev = null;\n\n  while (current) {\n    var next = current.next;\n    current.next = prev;\n    prev = current;\n    current = next;\n  }\n\n  this.top = prev;\n};\n\nStack.prototype.length = function () {\n  var current = this.top;\n  var counter = 0;\n\n  while (current) {\n    counter++;\n    current = current.next;\n  }\n\n  return counter;\n};\n\nStack.prototype.search = function (item) {\n  var current = this.top;\n\n  while (current) {\n    if (current.data === item) return true;\n    current = current.next;\n  }\n\n  return false;\n};\n\nStack.prototype.isEmpty = function () {\n  return this.length() < 1;\n};\n\nStack.prototype.traverse = function (fn) {\n  var current = this.top;\n\n  while (current) {\n    fn(current);\n    current = current.next;\n  }\n};\n\nvar _default = Stack;\nexports.default = _default;\n\n//# sourceURL=webpack:///./compiled/kashish/ds/stack.js?");

/***/ }),

/***/ "./compiled/kashish/graph/kGraph.js":
/*!******************************************!*\
  !*** ./compiled/kashish/graph/kGraph.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stack = _interopRequireDefault(__webpack_require__(/*! ../ds/stack */ \"./compiled/kashish/ds/stack.js\"));\n\nvar _queue = _interopRequireDefault(__webpack_require__(/*! ../ds/queue */ \"./compiled/kashish/ds/queue.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Vertex(vertexId) {\n  this.edges = {};\n  this.connected = [];\n  this.vertexId = vertexId;\n}\n\nVertex.prototype.connectToNode = function (userId, payload) {\n  this.connected[userId] = payload;\n};\n\nVertex.prototype.disconnectFromNode = function (userId) {\n  delete this.connected[userId];\n};\n\nfunction Graph() {\n  this.vertices = {};\n} // O(1) operation\n\n\nGraph.prototype.addVertex = function (vertexId) {\n  // add vertex only if it does not exist.\n  if (!this.vertices[vertexId]) {\n    this.vertices[vertexId] = new Vertex(vertexId);\n  }\n}; // O(E) operation - edges\n\n\nGraph.prototype.removeVertex = function (vertexId) {\n  if (this.vertices[vertexId]) {\n    // once you remove a vertex, you need to remove all edges pointing\n    // to the vertex.\n    delete this.vertices[vertexId];\n    Object.keys(this.vertices).forEach(function (key, index) {\n      if (this.vertices[key].edges[vertexId]) {\n        delete this.vertices[key].edges[vertexId];\n      }\n    }.bind(this));\n  }\n}; // O(1) operation\n\n\nGraph.prototype.getVertex = function (vertexId) {\n  return this.vertices[vertexId];\n}; // O(1) operation\n\n\nGraph.prototype.addEdge = function (startVertexId, endVertexId) {\n  // check to see if vertices exists.\n  // if it exists, set the edges and be done.\n  if (this.vertices[startVertexId] && this.vertices[endVertexId]) {\n    // check to see if edge exists, if it does, increment it's weight\n    if (this.vertices[startVertexId].edges[endVertexId]) {\n      this.vertices[startVertexId].edges[endVertexId].weight += 1;\n    } else {\n      // edge does not exist, set weight to 1.\n      this.vertices[startVertexId].edges[endVertexId] = {\n        weight: 1\n      };\n    }\n  }\n}; // O(1) operation\n\n\nGraph.prototype.removeEdge = function (startVertexId, endVertexId) {\n  if (this.vertices[startVertexId] && this.vertices[endVertexId]) {\n    if (this.vertices[startVertexId].edges[endVertexId]) {\n      delete this.vertices[startVertexId].edges[endVertexId];\n    }\n  }\n}; // O(1) operation\n\n\nGraph.prototype.getEdge = function (startVertexId, endVertexId) {\n  return this.vertices[startVertexId].edges[endVertexId] || null;\n};\n\nGraph.prototype.neighbors = function (vertexId) {\n  return this.vertices[vertexId] ? this.vertices[vertexId].edges : null;\n};\n\nGraph.prototype.BFS = function (vertexId) {\n  var q = new _queue.default();\n  var explored = new Set();\n  var n = this.vertices[vertexId];\n  q.enqueue(n);\n  explored.add(n);\n\n  while (!q.isEmpty()) {\n    var t = q.dequeue();\n    console.log(t);\n    var tEdge = t.data ? t.data.edges : undefined;\n\n    if (tEdge) {\n      for (var key in tEdge) {\n        if (tEdge.hasOwnProperty(key)) {\n          var n1 = this.vertices[tEdge[key]];\n\n          if (!explored.has(n1)) {\n            explored.add(n1);\n            q.enqueue(n1);\n          }\n        }\n      }\n    }\n  }\n\n  return q;\n};\n\nGraph.prototype.DFS = function (vertexId) {\n  // Create a Stack and add our initial node in it\n  var s = new _stack.default();\n  var explored = new Set();\n  var n = this.vertices[vertexId];\n  console.log(n);\n  s.push(n); // Mark the first node as explored\n\n  explored.add(n); // We'll continue till our Stack gets empty\n\n  while (!s.isEmpty()) {\n    var t = s.pop(); // Log every element that comes out of the Stack\n\n    console.log(t);\n    var tEdge = t.data ? t.data.edges : undefined;\n\n    if (tEdge) {\n      for (var key in tEdge) {\n        if (tEdge.hasOwnProperty(key)) {\n          var n1 = this.vertices[tEdge[key]];\n\n          if (!explored.has(n1)) {\n            explored.add(n1);\n            s.push(n1);\n          }\n        }\n      }\n    }\n  }\n\n  return s;\n};\n\nGraph.prototype.topologicalSortHelper = function (vertex, explored, stack) {\n  explored.add(vertex);\n  var e = vertex.edges;\n\n  for (var k in e) {\n    if (e.hasOwnProperty(k)) {\n      if (!explored.has(e[k])) {\n        this.topologicalSortHelper(e[k], explored, stack);\n      }\n    }\n  }\n\n  stack.push(vertex);\n};\n\nGraph.prototype.topologicalSort = function () {\n  // Create a Stack and add our initial node in it\n  var s = new _stack.default();\n  var explored = new Set();\n  var vs = this.vertices;\n\n  for (var k in vs) {\n    console.log(vs.hasOwnProperty(k));\n\n    if (vs.hasOwnProperty(k)) {\n      this.topologicalSortHelper(vs[k], explored, s);\n    }\n  } // this.vertices.map((v,b) => {\n  // if (!explored.has(v)) {\n  //     this.topologicalSortHelper(v, explored, s);\n  // }\n  // });\n\n\n  while (!s.isEmpty()) {\n    console.log(s.pop());\n  }\n};\n\nGraph.prototype.BFSShortestPath = function (n1, n2) {};\n\nGraph.prototype.primsMST = function () {};\n\nGraph.prototype.kruskalsMST = function () {};\n\nGraph.prototype.djikstraAlgorithm = function (startNode) {};\n\nGraph.prototype.floydWarshallAlgorithm = function () {};\n\nGraph.prototype.display = function () {\n  var graph = \"\";\n\n  for (var key in this.vertices) {\n    if (this.vertices.hasOwnProperty(key)) {\n      graph += JSON.stringify(this.vertices[key]) + \"->\" + JSON.stringify(this.vertices[key].edges) + \"\\n\";\n    }\n  }\n\n  console.log(graph);\n};\n\nvar graph = new Graph();\ngraph.addVertex(5);\ngraph.addVertex(2);\ngraph.addVertex(6);\ngraph.addVertex(7);\ngraph.addEdge(2, 5);\ngraph.addEdge(6, 7);\ngraph.addEdge(7, 5);\nconsole.log(graph.getEdge(2, 5));\nconsole.log(graph.getEdge(6, 7)); //graph.removeVertex(5);\n\nconsole.log(graph.getEdge(2, 5));\nconsole.log(graph.neighbors(6));\nconsole.log(graph.neighbors(5));\nconsole.log(graph);\ngraph.display();\nconsole.log(\"bfs\");\nvar q = graph.BFS(2);\nconsole.log(q);\nconsole.log(\"dfs\");\nvar s = graph.DFS(2);\nconsole.log(s);\nconsole.log(\"topological sort\");\ngraph.topologicalSort();\nvar st = new _stack.default();\nst.push(5);\nst.push(7);\nst.push(9);\nvar q1 = new _queue.default();\nq1.enqueue(5);\nq1.enqueue(7);\nq1.enqueue(9);\nconsole.log(st);\nconsole.log(q1);\n\n//# sourceURL=webpack:///./compiled/kashish/graph/kGraph.js?");

/***/ })

/******/ });