"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphs_1 = require("./graphs");
var dfs_1 = require("./dfs");
var graphObj = new graphs_1.Graph([], []);
var vSet = [1, 2, 3, 4, 5, 6, 7, 8];
var eSet = { v1: 2, v2: 3 };
vSet.forEach(function (ele) {
    graphObj.addVirtex(ele);
});
graphObj.addEdge(eSet);
graphObj.addEdge({ v1: 2, v2: 7 });
graphObj.addEdge({ v1: 2, v2: 5 });
graphObj.addEdge({ v1: 5, v2: 6 });
graphObj.addEdge({ v1: 1, v2: 4 });
console.log(graphObj.getTotalEdges());
console.log(graphObj.getTotalVirtices());
console.log(graphObj.getAllNeighbours(2));
dfs_1.DFS(graphObj, 2);
