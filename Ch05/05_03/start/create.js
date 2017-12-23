var fs = require("fs");

var md = `

Titulo de ejemplo
*************************

Subtitulo de ejemplo
......................

* 
* 
* 

`;

fs.writeFile("muestra.md", md.trim(), function (err) {

  console.log("Archivo creado");

});