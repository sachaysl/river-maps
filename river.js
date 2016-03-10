function northAmericanRivers() {

    var width = 960,
	height = 500;

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    var projection = d3.geo.albersUsa()
        .scale(1000)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);
    

    d3.json("data/all-north-american-rivers-10m.json", function(error, rivers) {
	if (error) return console.error(error);
	console.log(rivers.objects);

	svg.insert("path", ".graticule")
	    .datum(topojson.feature(rivers, rivers.objects.mostrivers))
    	    .attr("d", path)
	    .style("fill", "white")
	    .style("stroke", "blue")
	    .attr("transform", "scale(1,1)");
	
	svg.insert("path")
	    .datum(topojson.feature(rivers, rivers.objects.supprivers))
    	    .attr("d", path)
	    .style("fill", "white")
	    .style("stroke", "blue")
	    .attr("transform", "scale(1,1)");

      });

  










}
