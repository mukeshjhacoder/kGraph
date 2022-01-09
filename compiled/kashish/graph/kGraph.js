"use strict";

var _stack = _interopRequireDefault(require("../ds/stack"));

var _queue = _interopRequireDefault(require("../ds/queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Vertex(vertexId) {
  this.edges = {};
  this.connected = [];
  this.vertexId = vertexId;
}

Vertex.prototype.connectToNode = function (userId, payload) {
  this.connected[userId] = payload;
};

Vertex.prototype.disconnectFromNode = function (userId) {
  delete this.connected[userId];
};

function Graph() {
  this.vertices = {};
} // O(1) operation


Graph.prototype.addVertex = function (vertexId) {
  // add vertex only if it does not exist.
  if (!this.vertices[vertexId]) {
    this.vertices[vertexId] = new Vertex(vertexId);
  }
}; // O(E) operation - edges


Graph.prototype.removeVertex = function (vertexId) {
  if (this.vertices[vertexId]) {
    // once you remove a vertex, you need to remove all edges pointing
    // to the vertex.
    delete this.vertices[vertexId];
    Object.keys(this.vertices).forEach(function (key, index) {
      if (this.vertices[key].edges[vertexId]) {
        delete this.vertices[key].edges[vertexId];
      }
    }.bind(this));
  }
}; // O(1) operation


Graph.prototype.getVertex = function (vertexId) {
  return this.vertices[vertexId];
}; // O(1) operation


Graph.prototype.addEdge = function (startVertexId, endVertexId) {
  // check to see if vertices exists.
  // if it exists, set the edges and be done.
  if (this.vertices[startVertexId] && this.vertices[endVertexId]) {
    // check to see if edge exists, if it does, increment it's weight
    if (this.vertices[startVertexId].edges[endVertexId]) {
      this.vertices[startVertexId].edges[endVertexId].weight += 1;
    } else {
      // edge does not exist, set weight to 1.
      this.vertices[startVertexId].edges[endVertexId] = {
        weight: 1
      };
    }
  }
}; // O(1) operation


Graph.prototype.removeEdge = function (startVertexId, endVertexId) {
  if (this.vertices[startVertexId] && this.vertices[endVertexId]) {
    if (this.vertices[startVertexId].edges[endVertexId]) {
      delete this.vertices[startVertexId].edges[endVertexId];
    }
  }
}; // O(1) operation


Graph.prototype.getEdge = function (startVertexId, endVertexId) {
  return this.vertices[startVertexId].edges[endVertexId] || null;
};

Graph.prototype.neighbors = function (vertexId) {
  return this.vertices[vertexId] ? this.vertices[vertexId].edges : null;
};

Graph.prototype.BFS = function (vertexId) {
  var q = new _queue.default();
  var explored = new Set();
  var n = this.vertices[vertexId];
  q.enqueue(n);
  explored.add(n);

  while (!q.isEmpty()) {
    var t = q.dequeue();
    console.log(t);
    var tEdge = t.data ? t.data.edges : undefined;

    if (tEdge) {
      for (var key in tEdge) {
        if (tEdge.hasOwnProperty(key)) {
          var n1 = this.vertices[tEdge[key]];

          if (!explored.has(n1)) {
            explored.add(n1);
            q.enqueue(n1);
          }
        }
      }
    }
  }

  return q;
};

Graph.prototype.DFS = function (vertexId) {
  // Create a Stack and add our initial node in it
  var s = new _stack.default();
  var explored = new Set();
  var n = this.vertices[vertexId];
  console.log(n);
  s.push(n); // Mark the first node as explored

  explored.add(n); // We'll continue till our Stack gets empty

  while (!s.isEmpty()) {
    var t = s.pop(); // Log every element that comes out of the Stack

    console.log(t);
    var tEdge = t.data ? t.data.edges : undefined;

    if (tEdge) {
      for (var key in tEdge) {
        if (tEdge.hasOwnProperty(key)) {
          var n1 = this.vertices[tEdge[key]];

          if (!explored.has(n1)) {
            explored.add(n1);
            s.push(n1);
          }
        }
      }
    }
  }

  return s;
};

Graph.prototype.topologicalSortHelper = function (vertex, explored, stack) {
  explored.add(vertex);
  var e = vertex.edges;

  for (var k in e) {
    if (e.hasOwnProperty(k)) {
      if (!explored.has(e[k])) {
        this.topologicalSortHelper(e[k], explored, stack);
      }
    }
  }

  stack.push(vertex);
};

Graph.prototype.topologicalSort = function () {
  // Create a Stack and add our initial node in it
  var s = new _stack.default();
  var explored = new Set();
  var vs = this.vertices;

  for (var k in vs) {
    console.log(vs.hasOwnProperty(k));

    if (vs.hasOwnProperty(k)) {
      this.topologicalSortHelper(vs[k], explored, s);
    }
  } // this.vertices.map((v,b) => {
  // if (!explored.has(v)) {
  //     this.topologicalSortHelper(v, explored, s);
  // }
  // });


  while (!s.isEmpty()) {
    console.log(s.pop());
  }
};

Graph.prototype.BFSShortestPath = function (n1, n2) {};

Graph.prototype.primsMST = function () {};

Graph.prototype.kruskalsMST = function () {};

Graph.prototype.djikstraAlgorithm = function (startNode) {};

Graph.prototype.floydWarshallAlgorithm = function () {};

Graph.prototype.display = function () {
  var graph = "";

  for (var key in this.vertices) {
    if (this.vertices.hasOwnProperty(key)) {
      graph += JSON.stringify(this.vertices[key]) + "->" + JSON.stringify(this.vertices[key].edges) + "\n";
    }
  }

  console.log(graph);
};

var graph = new Graph();
graph.addVertex(5);
graph.addVertex(2);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(2, 5);
graph.addEdge(6, 7);
graph.addEdge(7, 5);
console.log(graph.getEdge(2, 5));
console.log(graph.getEdge(6, 7)); //graph.removeVertex(5);

console.log(graph.getEdge(2, 5));
console.log(graph.neighbors(6));
console.log(graph.neighbors(5));
console.log(graph);
graph.display();
console.log("bfs");
var q = graph.BFS(2);
console.log(q);
console.log("dfs");
var s = graph.DFS(2);
console.log(s);
console.log("topological sort");
graph.topologicalSort();
var st = new _stack.default();
st.push(5);
st.push(7);
st.push(9);
var q1 = new _queue.default();
q1.enqueue(5);
q1.enqueue(7);
q1.enqueue(9);
console.log(st);
console.log(q1);