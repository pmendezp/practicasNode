
function grab(variable) {
	
	var index = process.argv.indexOf(variable);
	
	return (index === -1) ? null : process.argv[index+1];

}



var saludo = grab('--saludo');

var usuario = grab('--usuario');



if (!usuario || !saludo) {
	
	console.log("La cagaste!");

} else {
	
	console.log(`Bienvenido ${usuario}, ${saludo}`);

}

