"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directed_graphs_1 = require("./directed-graphs");
var directed_dfs_1 = require("./directed-dfs");
var graphObj = new directed_graphs_1.Graph([], []);
var vSet = [1, 2, 3, 4, 5, 6, 7, 8];
vSet.forEach(function (ele) {
    graphObj.addVirtex(ele);
});
graphObj.addEdge({ v1: 1, v2: 2 });
graphObj.addEdge({ v1: 1, v2: 5 });
graphObj.addEdge({ v1: 1, v2: 4 });
graphObj.addEdge({ v1: 4, v2: 3 });
graphObj.addEdge({ v1: 3, v2: 2 });
graphObj.addEdge({ v1: 1, v2: 3 });
directed_dfs_1.DFS(graphObj, 1);
