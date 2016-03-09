function northAmericanRivers() {

    d3.json("data/ne_10m_rivers_north_america/narstopo.json", function(error, rivers) {
	if (error) return console.error(error);
	console.log(rivers);
    });











}
