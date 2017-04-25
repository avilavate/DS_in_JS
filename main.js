var Main = (function () {
    function Main() {
        this.graphObj = new Graph([], []);
        this.vSet = [1, 2, 3, 4, 5, 6, 7, 8];
        this.vCodinates = [];
    }
    Main.prototype.init = function () {
        var _this = this;
        this.graphObj = new Graph([], []);
        this.vSet.forEach(function (ele) {
            _this.graphObj.addVirtex(ele);
        });
        this.graphObj.addEdge({ v1: 1, v2: 2 });
        this.graphObj.addEdge({ v1: 1, v2: 5 });
        this.graphObj.addEdge({ v1: 1, v2: 4 });
        this.graphObj.addEdge({ v1: 4, v2: 3 });
        this.graphObj.addEdge({ v1: 3, v2: 2 });
        this.graphObj.addEdge({ v1: 1, v2: 3 });
    };
    Main.prototype.clearSvg = function () {
        clear();
    };
    Main.prototype.drawNodes = function () {
        var _this = this;
        this.vSet.forEach(function (v) {
            var point = _this.getRandomCordinates(v);
            drawCircle(point.x, point.y, v.toString());
        });
    };
    Main.prototype.drawEdges = function (edge) {
        var _this = this;
        this.graphObj.edges.forEach(function (e) {
            var x1y1 = _this.getvertexCordinates(e.v1);
            var x2y2 = _this.getvertexCordinates(e.v2);
            console.log(x1y1, x2y2);
            lineDraw(x1y1, x2y2);
        });
    };
    Main.prototype.DFS = function () {
        DFS(this.graphObj, 1);
    };
    Main.prototype.getRandomCordinates = function (v) {
        var point = { x: 0, y: 0, v: v };
        point.x = Math.floor(Math.random() * 700);
        point.y = Math.floor(Math.random() * 700);
        this.vCodinates.push(point);
        console.dir(point);
        return point;
    };
    Main.prototype.getvertexCordinates = function (v) {
        var res = this.vCodinates.filter(function (vc) {
            return vc.v == v;
        });
        console.log(res);
        return res[0];
    };
    return Main;
}());
var main = new Main();
main.init();
