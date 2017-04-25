//The data for our line
var lineDraw = function (x1y1, x2y2) {
    console.log(x1y1, x2y2);
    var lineData = [{ "x": x1y1.x, "y": x1y1.y }, { "x": x2y2.x, "y": x2y2.y },
    ];

    //This is the accessor function we talked about above
    var lineFunction = d3.line()
        .x(function (d) { return d.x; })
        .y(function (d) { return d.y; })

    //The SVG Container
    var svgContainer = d3.select("body").select("#svg");


    //The line SVG Path we draw
    var lineGraph = svgContainer.append("path")
        .attr("d", lineFunction(lineData))
        .attr("stroke", "gray")
        .attr("stroke-width", 2)
        .attr("fill", "none");
}