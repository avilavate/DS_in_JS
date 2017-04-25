//  import { Edge } from './directed-graphs';
// import { DFS } from './directed-dfs';
// import { drawCircle } from './drawing-utils/circle';

//Disconnected edge (from'2')

interface IPoint {
    x: number;
    y: number;
    v: number;
}

class Main {
    public graphObj = new Graph([], []);
    public vSet: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
    public vCodinates: Array<IPoint> = [];

    init(): void {
        this.graphObj = new Graph([], []);
        this.vSet.forEach(ele => {
            this.graphObj.addVirtex(ele);
        });

        this.graphObj.addEdge({ v1: 1, v2: 2 });
        this.graphObj.addEdge({ v1: 1, v2: 5 });
        this.graphObj.addEdge({ v1: 1, v2: 4 });
        this.graphObj.addEdge({ v1: 4, v2: 3 });
        this.graphObj.addEdge({ v1: 3, v2: 2 });
        this.graphObj.addEdge({ v1: 1, v2: 3 });

    }
    
    clearSvg(){
        clear();
    }

    drawNodes() {
        this.vSet.forEach(v => {
            let point = this.getRandomCordinates(v);
            drawCircle(point.x, point.y, v.toString());
        })
    }

    drawEdges(edge: Edge) {
        this.graphObj.edges.forEach(e => {
            let x1y1 = this.getvertexCordinates(e.v1);
            let x2y2 = this.getvertexCordinates(e.v2);
            console.log(x1y1, x2y2);
            lineDraw(x1y1, x2y2);
        })

    }

    DFS(): void {
        DFS(this.graphObj, 1);
    }
    private getRandomCordinates(v: number): IPoint {
        let point: IPoint = { x: 0, y: 0, v: v };
        point.x = Math.floor(Math.random() * 700);
        point.y = Math.floor(Math.random() * 700);
        this.vCodinates.push(point);
        console.dir(point);
        return point;
    }

    private getvertexCordinates(v: number): IPoint {
        var res = this.vCodinates.filter(vc => {
            return vc.v == v;
        });
        console.log(res);
        return res[0];
    }
}

var main = new Main();
main.init();
