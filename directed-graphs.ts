export interface Edge {
    v1: number;
    v2: number
}

export class Graph {
    constructor(public vertices: Array<number>, public edges: Array<Edge>) { }

    addVirtex(v: number): boolean {
        let res = false;
        if (!(this.vertices.indexOf(v) > -1)) {
            this.vertices.push(v);
            res = true;
        }
        return res;
    }

    getTotalVirtices(): number {
        return this.vertices.length;
    }

    getTotalEdges(): number {
        return this.edges.length;
    }

    containsVirtext(v: number): boolean {
        return this.vertices.indexOf(v) > -1;
    }

    getAllNeighbours(root: number): number[] {
        let neighbours = this.edges.filter(edge => {
            return edge.v1 == root;
        });
        let result = neighbours.map(n => {
            return n.v2
        });
        return result;
    }

    addEdge(e: Edge) {
        if (this.containsVirtext(e.v1) && this.containsVirtext(e.v2)) {
            this.edges.push(e);
        }
    }
}

