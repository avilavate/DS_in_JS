import { Graph, Edge } from './graphs';

export interface VTrack {
    v: number;
    visited: boolean;
}
console.log("----------DFS---------")
export var DFS = function (graph: Graph, source: number) {
    let S: Array<VTrack> = [];
    S.push({ v: source, visited: true });
    console.log(source);
    while (S.length > 0) {
        let node = S.splice(0, 1);

        let neighbours = graph.getAllNeighbours(node[0].v).filter(e => { return (e != node[0].v && e != source); });
        for (var index = 0; index < neighbours.length; index++) {
            if (S.filter(s => { s.v == neighbours[index] }).length == 0) {
                S.push({ v: neighbours[index], visited: true });
                console.log(neighbours[index]);
            }
        }
    }
}