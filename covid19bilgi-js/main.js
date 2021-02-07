window.onload = function() {
	covidjs();
}

function covidjs() {
	fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/248')
	.then(function(resp) { return resp.json() })
	.then(function(h) {
		let population = h.location.country_population;
		let update = h.location.last_updated;
		let confirmedCases = h.location.latest.confirmed;
		let deaths = h.location.latest.deaths;
        let recovered = h.location.latest.recovered;

		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('tr');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('tr');
        document.getElementById('recovered').innerHTML = recovered.toLocaleString('tr');

	})
	setTimeout(covidjs, 43200000)
}