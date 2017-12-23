var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var Persona = {
  nombre: '',
  dichos: []
};


rl.question("Cual es el nombre de la persona? ", function (resp) {

  Persona.nombre = resp;

  fs.writeFileSync(Persona.nombre + ".md", `${Persona.nombre}\n==================\n\n`);

  rl.setPrompt(`Que diria ${Persona.nombre}? `);

  rl.prompt();

  rl.on('line', function (dicho) {

    Persona.dichos.push(dicho.trim());

    fs.appendFileSync(Persona.nombre + ".md", `* ${dicho.trim()} \n`);

    if (dicho.toLowerCase().trim() === 'cerrar') {
      rl.close();
    } else {
      rl.setPrompt(`Que mas diria ${Persona.nombre}? ('cerrar' para salir) `);
      rl.prompt();
    }

  });

});


rl.on('close', function () {

  console.log("%s es la persona que dice %j", Persona.nombre, Persona.dichos);
  process.exit();

});
