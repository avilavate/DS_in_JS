import { Graph, Edge } from './directed-graphs';
import { DFS } from './directed-dfs';

let graphObj = new Graph([], []);
let vSet: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

vSet.forEach(ele => {
    graphObj.addVirtex(ele);
})

graphObj.addEdge({ v1: 1, v2: 2 });
graphObj.addEdge({ v1: 1, v2: 5 });
graphObj.addEdge({ v1: 1, v2: 4 });
graphObj.addEdge({ v1: 4, v2: 3 });
graphObj.addEdge({ v1: 3, v2: 2 });
graphObj.addEdge({ v1: 1, v2: 3 });

//Disconnected edge (from'2')
DFS(graphObj, 1);