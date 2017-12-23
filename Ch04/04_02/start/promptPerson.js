var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var persona = {
  nombre: '',
  dichos: []
};


rl.question("Cual es el nombre de una persona? ", function (answer) {

  persona.nombre = answer;

  rl.setPrompt(`Que diria ${persona.nombre}? `);

  rl.prompt();

  rl.on('line', function (saying) {

    persona.dichos.push(saying.trim());

    if (saying.toLowerCase().trim() === 'cerrar') {
      rl.close();
    } else {
      rl.setPrompt(`Que mas diria ${persona.nombre}? ('cerrar' para salir) `);
      rl.prompt();
    }

  });

});


rl.on('close', function () {

  console.log("%s es una persona real que dice %j", persona.nombre, persona.dichos);
  process.exit();

});



