
import Stack from '../ds/stack';
import Queue from '../ds/queue';

function Vertex(vertexId) {
    this.edges = {};
    this.connected = [];
    this.vertexId = vertexId;
}

Vertex.prototype.connectToNode = function(userId, payload){
    this.connected[userId] = payload;
}
Vertex.prototype.disconnectFromNode = function(userId){
    delete this.connected[userId];
}
  
function Graph() {
    this.vertices = {};
}
Graph.prototype.addVertex = function(vertexId) {
    if (!this.vertices[vertexId]) {
        this.vertices[vertexId] = new Vertex(vertexId);
    }
};
Graph.prototype.removeVertex = function(vertexId) {
if (this.vertices[vertexId]) {
    delete this.vertices[vertexId];
    
    Object.keys(this.vertices).forEach(function(key, index) {
    if (this.vertices[key].edges[vertexId]) {
        delete this.vertices[key].edges[vertexId];
    }
    }.bind(this));
}
};
Graph.prototype.getVertex = function(vertexId) {
    return this.vertices[vertexId];
};
Graph.prototype.addEdge = function(startVertexId, endVertexId) {
if (this.vertices[startVertexId] && this.vertices[endVertexId]) {
    if (this.vertices[startVertexId].edges[endVertexId]) {
    this.vertices[startVertexId].edges[endVertexId].weight += 1;
    } else {
    this.vertices[startVertexId].edges[endVertexId] = { weight: 1 };
    }
}
};
Graph.prototype.removeEdge = function(startVertexId, endVertexId) {
if (this.vertices[startVertexId] && this.vertices[endVertexId]) {
    if (this.vertices[startVertexId].edges[endVertexId]) {
    delete this.vertices[startVertexId].edges[endVertexId];
    }
}
};
Graph.prototype.getEdge = function(startVertexId, endVertexId) {
return this.vertices[startVertexId].edges[endVertexId] || null;
};
  
  
Graph.prototype.neighbors = function(vertexId) {
return this.vertices[vertexId] ? this.vertices[vertexId].edges : null;
};

Graph.prototype.BFS = function(vertexId){
    let q = new Queue();
    let explored = new Set();
    let n = this.vertices[vertexId];
    q.enqueue(n);
    explored.add(n);
    while (!q.isEmpty()) {
       let t = q.dequeue();
       console.log(t);
        const tEdge = t.data?t.data.edges:undefined;
       if(tEdge){
            for (let key in tEdge) {
                if (tEdge.hasOwnProperty(key)) {
                    const n1 = this.vertices[tEdge[key]]
                    if (!explored.has(n1)) {
                        explored.add(n1);
                        q.enqueue(n1);
                    }
                }
            }
       }
    }
    return q;
}

Graph.prototype.DFS = function(vertexId){
    let s = new Stack();
    let explored = new Set();
    const n = this.vertices[vertexId];
    console.log(n)
    s.push(n);
    explored.add(n);
    while (!s.isEmpty()) {
       let t = s.pop();
       console.log(t);
       const tEdge = t.data?t.data.edges:undefined;
       if (tEdge) {
            for (let key in tEdge) {
                if (tEdge.hasOwnProperty(key)) {
                    const n1 = this.vertices[tEdge[key]]
                    if (!explored.has(n1)) {
                        explored.add(n1);
                        s.push(n1);
                    }
                }
            }
       }
    }
    return s;
}

Graph.prototype.topologicalSortHelper = function(vertex, explored, stack){
    explored.add(vertex);
    const e = vertex.edges;
    for (let k in e) {
        if (e.hasOwnProperty(k)) {
            if (!explored.has(e[k])) {
                this.topologicalSortHelper(e[k], explored, stack);
            }
        }
    }
    stack.push(vertex);
}

Graph.prototype.topologicalSort = function(){
    let s = new Stack();
    let explored = new Set();
    const vs = this.vertices;
    for (let k in vs) {
        console.log(vs.hasOwnProperty(k))
        if (vs.hasOwnProperty(k)) {
            this.topologicalSortHelper(vs[k], explored, s);
        }
    }
    while (!s.isEmpty()) {
        console.log(s.pop());
    }
}

Graph.prototype.BFSShortestPath = function(n1, n2){

}

Graph.prototype.primsMST = function(){

}

Graph.prototype.kruskalsMST = function(){

}

Graph.prototype.djikstraAlgorithm = function(startNode){

}

Graph.prototype.floydWarshallAlgorithm = function(){

}

Graph.prototype.display = function(){
    let graph = "";
    for (let key in this.vertices) {
        if (this.vertices.hasOwnProperty(key)) {
            graph += JSON.stringify(this.vertices[key]) + "->" + JSON.stringify(this.vertices[key].edges) + "\n";
        }
    }
    console.log(graph);
}
  
var graph = new Graph();

graph.addVertex(5);
graph.addVertex(2);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(2, 5);
graph.addEdge(6, 7);
graph.addEdge(7, 5);
console.log(graph.getEdge(2, 5));
console.log(graph.getEdge(6, 7));
//graph.removeVertex(5);
console.log(graph.getEdge(2, 5));
console.log(graph.neighbors(6));
console.log(graph.neighbors(5));
console.log(graph)
graph.display()
console.log("bfs")
const q=graph.BFS(2)
console.log(q)
console.log("dfs")
const s=graph.DFS(2)
console.log(s)
console.log("topological sort");
graph.topologicalSort()

let st = new Stack();
st.push(5)
st.push(7)
st.push(9)

let q1 = new Queue();
q1.enqueue(5)
q1.enqueue(7)
q1.enqueue(9)

console.log(st)
console.log(q1)