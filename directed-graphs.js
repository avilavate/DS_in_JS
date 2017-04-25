var Graph = (function () {
    function Graph(vertices, edges) {
        this.vertices = vertices;
        this.edges = edges;
    }
    Graph.prototype.addVirtex = function (v) {
        var res = false;
        if (!(this.vertices.indexOf(v) > -1)) {
            this.vertices.push(v);
            res = true;
        }
        return res;
    };
    Graph.prototype.getTotalVirtices = function () {
        return this.vertices.length;
    };
    Graph.prototype.getTotalEdges = function () {
        return this.edges.length;
    };
    Graph.prototype.containsVirtext = function (v) {
        return this.vertices.indexOf(v) > -1;
    };
    Graph.prototype.getAllNeighbours = function (root) {
        var neighbours = this.edges.filter(function (edge) {
            return edge.v1 == root;
        });
        var result = neighbours.map(function (n) {
            return n.v2;
        });
        return result;
    };
    Graph.prototype.addEdge = function (e) {
        if (this.containsVirtext(e.v1) && this.containsVirtext(e.v2)) {
            this.edges.push(e);
        }
    };
    return Graph;
}());
