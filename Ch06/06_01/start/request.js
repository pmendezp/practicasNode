var https = require("https");
var fs = require("fs");

var options = {
	hostname: "es.wikipedia.org",
	port: 443,
	path: "/wiki/Rick_Sanchez_(personaje)",
	method: "GET"
};

var req = https.request(options, function(res) {

	var responseBody = "";

	console.log("La respuesta del servidor empezo.");
	console.log(`Estatus del server: ${res.statusCode} `);
	console.log("Encabezados de la respuesta: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	res.on("end", function() {
		fs.writeFile("Rick_Sanchez_(personaje).html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("Archivo descargado");
		});
	});

});

req.on("error", function(err) {
	console.log(`problema con la peticion: ${err.message}`);
});

req.end();

