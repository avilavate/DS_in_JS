import { Graph, Edge } from './graphs';
import { DFS } from './dfs';

let graphObj = new Graph([], []);
let vSet: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
let eSet: Edge = { v1: 2, v2: 3 };

vSet.forEach(ele => {
    graphObj.addVirtex(ele);
})

graphObj.addEdge(eSet);
graphObj.addEdge({ v1: 2, v2: 7 });
graphObj.addEdge({ v1: 2, v2: 5 });
graphObj.addEdge({ v1: 5, v2: 6 });
graphObj.addEdge({ v1: 6, v2: 1 });
graphObj.addEdge({ v1: 2, v2: 1 });

//Disconnected edge (from'2')

console.log(graphObj.getTotalEdges());
console.log(graphObj.getTotalVirtices());
console.log(graphObj.getAllNeighbours(2));

DFS(graphObj, 2);