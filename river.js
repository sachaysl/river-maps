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
    
    d3.json("data/ne_10m_rivers_north_america/narstopo.json", function(error, rivers) {
	if (error) return console.error(error);
	console.log(rivers.objects.supplement.geometries);

	svg.insert("path", ".graticule")
	    .datum(topojson.feature(rivers, rivers.objects.supplement))
	    .attr("d", path);
	
		   
	
    });











}
