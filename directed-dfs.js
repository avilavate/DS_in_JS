console.log("----------DFS---------");
var DFS = function (graph, source) {
    var visitedNodes = [];
    console.time("DFS");
    var S = [];
    S.push({ v: source, visited: true });
    visitedNodes.push(source);
    var _loop_1 = function () {
        var node = S.splice(0, 1);
        var neighbours = graph.getAllNeighbours(node[0].v).
            filter(function (e) {
            return (e != node[0].v &&
                e != source &&
                (S.filter(function (s) { s.v == e; }).length == 0));
        });
        for (var index = 0; index < neighbours.length; index++) {
            if (S.filter(function (s) { s.v == neighbours[index]; }).length == 0) {
                S.push({ v: neighbours[index], visited: true });
                visitedNodes.push(neighbours[index]);
            }
        }
    };
    while (S.length > 0) {
        _loop_1();
    }
    console.dir(visitedNodes.filter(function (e, index) { return visitedNodes.indexOf(e) == index; }));
    console.timeEnd("DFS");
};
