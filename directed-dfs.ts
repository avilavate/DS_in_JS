//import { Graph, Edge } from './graphs';

 interface VTrack {
    v: number;
    visited: boolean;
}
console.log("----------DFS---------")
 var DFS = function (graph: Graph, source: number) {
    let visitedNodes: Array<number> = [];
    console.time("DFS");
    let S: Array<VTrack> = [];
    S.push({ v: source, visited: true });
    visitedNodes.push(source);
    while (S.length > 0) {
        let node = S.splice(0, 1);

        let neighbours = graph.getAllNeighbours(node[0].v).
            filter(e => {
                return (e != node[0].v &&
                    e != source &&
                    (S.filter(s => { s.v == e }).length == 0))
            });
        for (var index = 0; index < neighbours.length; index++) {
            if (S.filter(s => { s.v == neighbours[index] }).length == 0) {
                S.push({ v: neighbours[index], visited: true });
                visitedNodes.push(neighbours[index]);
            }
        }
    }
    console.dir(visitedNodes.filter((e, index) => { return visitedNodes.indexOf(e) == index }));
    console.timeEnd("DFS");
}