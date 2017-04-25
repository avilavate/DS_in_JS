var drawCircle = function (x, y, label) {
    var svgContainer = d3.select("body").select("#svg");
    var circle = svgContainer.append("circle").attr("cx", x).attr("cy", y).attr("r", 20).attr("stroke", "black")
        .attr("fill", "yellow");
    var w = 10, h = 10, pad = 4;
    if (label != "") {
        var lText = svgContainer.append("text");
        lText.attr("x", x)
            .attr("y", y + 5)
            .attr("class", "1")
            .text(label);
    }
};
