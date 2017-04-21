"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFS = function (graph, source) {
    var S = [];
    S.push({ v: source, visited: true });
    console.log(source);
    while (S.length > 0) {
        var node = S.splice(0, 1);
        var neighbours = graph.getAllNeighbours(node[0].v);
        for (var index = 0; index < neighbours.length; index++) {
            S.push({ v: neighbours[index], visited: true });
            console.log(neighbours[index]);
        }
    }
};
