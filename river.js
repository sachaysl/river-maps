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
    
//    d3.json("data/ne_10m_rivers_north_america/narstopo.json", function(error, rivers) {
//	if (error) return console.error(error);
//	console.log(rivers.objects.supplement.geometries);

//	svg.insert("path", ".graticule")
//	    .datum(topojson.feature(rivers, rivers.objects.supplement))
    //	    .attr("d", path);

    //});

  
 //   d3.json("data/ne_10m_rivers_lake_centerlines/rivers.json", function(error, rivers) {
//	if (error) return console.error(error);
//	console.log(rivers.objects.rivers.geometries);

//	svg.insert("path", ".graticule")
//	    .datum(topojson.feature(rivers, rivers.objects.rivers))
  //  	    .attr("d", path)
//	    .attr("fill", blue);
  //  });

    d3.json("data/all-rivers-lakes-north-america.json", function(error, rivers) {
	if (error) return console.error(error);
	console.log(rivers.objects);

	svg.insert("path", ".graticule")
	    .datum(topojson.feature(rivers, rivers.objects.riversandlakes))
    	    .attr("d", path)
	    .style("fill", "blue")

	svg.insert("path", ".graticule")
	    .datum(topojson.feature(rivers, rivers.objects.supplemental))
    	    .attr("d", path)
	    .style("fill", "blue")

      });

  










}
