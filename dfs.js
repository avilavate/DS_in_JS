"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("----------DFS---------");
exports.DFS = function (graph, source) {
    var S = [];
    S.push({ v: source, visited: true });
    console.log(source);
    var _loop_1 = function () {
        var node = S.splice(0, 1);
        var neighbours = graph.getAllNeighbours(node[0].v).filter(function (e) { return (e != node[0].v && e != source); });
        for (var index = 0; index < neighbours.length; index++) {
            if (S.filter(function (s) { s.v == neighbours[index]; }).length == 0) {
                S.push({ v: neighbours[index], visited: true });
                console.log(neighbours[index]);
            }
        }
    };
    while (S.length > 0) {
        _loop_1();
    }
};
